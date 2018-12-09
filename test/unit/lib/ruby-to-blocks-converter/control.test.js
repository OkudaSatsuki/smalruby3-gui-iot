import RubyToBlocksConverter from '../../../../src/lib/ruby-to-blocks-converter';
import {
    convertAndExpectToEqualBlocks,
    convertAndExpectToEqualRubyStatement,
    rubyToExpected,
    expectedInfo
} from '../../../helpers/expect-to-equal-blocks';

describe('RubyToBlocksConverter/Control', () => {
    let converter;
    let target;
    let code;
    let expected;

    beforeEach(() => {
        converter = new RubyToBlocksConverter(null);
        target = null;
        code = null;
        expected = null;
    });

    describe('control_wait', () => {
        test('number', () => {
            code = 'sleep(10)';
            expected = [
                {
                    opcode: 'control_wait',
                    inputs: [
                        {
                            name: 'DURATION',
                            block: expectedInfo.makeNumber(10, 'math_positive_number')
                        }
                    ]
                }
            ];
            convertAndExpectToEqualBlocks(converter, target, code, expected);
        });

        test('value block', () => {
            code = 'sleep(x)';
            expected = [
                {
                    opcode: 'control_wait',
                    inputs: [
                        {
                            name: 'DURATION',
                            block: rubyToExpected(converter, target, 'x')[0],
                            shadow: expectedInfo.makeNumber(1, 'math_positive_number')
                        }
                    ]
                }
            ];
            convertAndExpectToEqualBlocks(converter, target, code, expected);
        });

        test('boolean block', () => {
            code = 'sleep(touching?("_edge_"))';
            expected = [
                {
                    opcode: 'control_wait',
                    inputs: [
                        {
                            name: 'DURATION',
                            block: rubyToExpected(converter, target, 'touching?("_edge_")')[0],
                            shadow: expectedInfo.makeNumber(1, 'math_positive_number')
                        }
                    ]
                }
            ];
            convertAndExpectToEqualBlocks(converter, target, code, expected);
        });

        test('invalid', () => {
            [
                'sleep',
                'sleep()',
                'sleep(abc)',
                'sleep("abc")',
                'sleep(1, 2)'
            ].forEach(c => {
                convertAndExpectToEqualRubyStatement(converter, target, c, c);
            });
        });
    });

    describe('control_repeat', () => {
        test('number', () => {
            code = '10.times { move(10); wait }';
            expected = [
                {
                    opcode: 'control_repeat',
                    inputs: [
                        {
                            name: 'TIMES',
                            block: expectedInfo.makeNumber(10, 'math_whole_number')
                        }
                    ],
                    branches: [
                        rubyToExpected(converter, target, 'move(10)')[0]
                    ]
                }
            ];
            convertAndExpectToEqualBlocks(converter, target, code, expected);

            code = '10.times { move(10); bounce_if_on_edge; wait }';
            expected = [
                {
                    opcode: 'control_repeat',
                    inputs: [
                        {
                            name: 'TIMES',
                            block: expectedInfo.makeNumber(10, 'math_whole_number')
                        }
                    ],
                    branches: [
                        rubyToExpected(converter, target, 'move(10); bounce_if_on_edge')[0]
                    ]
                }
            ];
            convertAndExpectToEqualBlocks(converter, target, code, expected);
        });

        test('value block', () => {
            code = 'x.times { move(10); wait }';
            expected = [
                {
                    opcode: 'control_repeat',
                    inputs: [
                        {
                            name: 'TIMES',
                            block: rubyToExpected(converter, target, 'x')[0],
                            shadow: expectedInfo.makeNumber(10, 'math_whole_number')
                        }
                    ],
                    branches: [
                        rubyToExpected(converter, target, 'move(10)')[0]
                    ]
                }
            ];
            convertAndExpectToEqualBlocks(converter, target, code, expected);
        });

        test('boolean block', () => {
            code = '(touching?("_edge_")).times { move(10); wait }';
            expected = [
                {
                    opcode: 'control_repeat',
                    inputs: [
                        {
                            name: 'TIMES',
                            block: rubyToExpected(converter, target, 'touching?("_edge_")')[0],
                            shadow: expectedInfo.makeNumber(10, 'math_whole_number')
                        }
                    ],
                    branches: [
                        rubyToExpected(converter, target, 'move(10)')[0]
                    ]
                }
            ];
            convertAndExpectToEqualBlocks(converter, target, code, expected);
        });

        test('invalid', () => {
            [
                '10.times',
                '10.times(1)'
            ].forEach(c => {
                convertAndExpectToEqualRubyStatement(converter, target, c, c);
            });

            [
                '10.times {}',
                '10.times { wait; move(10) }',
                '10.times { |i| wait }',
                '"10".times { wait }'
            ].forEach(c => {
                const res = converter.targetCodeToBlocks(target, c);
                expect(converter.errors).toHaveLength(0);
                const scriptIds = Object.keys(converter.blocks).filter(id => converter.blocks[id].topLevel);
                expect(scriptIds).toHaveLength(1);
                expect(converter.blocks[scriptIds[0]]).toHaveProperty('opcode', 'ruby_statement_with_block');
                expect(res).toBeTruthy();
            });
        });

        describe('repeat', () => {
            test('number', () => {
                code = 'repeat(10) { move(10) }';
                expected = [
                    {
                        opcode: 'control_repeat',
                        inputs: [
                            {
                                name: 'TIMES',
                                block: expectedInfo.makeNumber(10, 'math_whole_number')
                            }
                        ],
                        branches: [
                            rubyToExpected(converter, target, 'move(10)')[0]
                        ]
                    }
                ];
                convertAndExpectToEqualBlocks(converter, target, code, expected);

                code = 'repeat(10) { move(10); bounce_if_on_edge }';
                expected = [
                    {
                        opcode: 'control_repeat',
                        inputs: [
                            {
                                name: 'TIMES',
                                block: expectedInfo.makeNumber(10, 'math_whole_number')
                            }
                        ],
                        branches: [
                            rubyToExpected(converter, target, 'move(10); bounce_if_on_edge')[0]
                        ]
                    }
                ];
                convertAndExpectToEqualBlocks(converter, target, code, expected);
            });

            test('value block', () => {
                code = 'repeat(x) { move(10) }';
                expected = [
                    {
                        opcode: 'control_repeat',
                        inputs: [
                            {
                                name: 'TIMES',
                                block: rubyToExpected(converter, target, 'x')[0],
                                shadow: expectedInfo.makeNumber(10, 'math_whole_number')
                            }
                        ],
                        branches: [
                            rubyToExpected(converter, target, 'move(10)')[0]
                        ]
                    }
                ];
                convertAndExpectToEqualBlocks(converter, target, code, expected);
            });

            test('boolean block', () => {
                code = 'repeat(touching?("_edge_")) { move(10) }';
                expected = [
                    {
                        opcode: 'control_repeat',
                        inputs: [
                            {
                                name: 'TIMES',
                                block: rubyToExpected(converter, target, 'touching?("_edge_")')[0],
                                shadow: expectedInfo.makeNumber(10, 'math_whole_number')
                            }
                        ],
                        branches: [
                            rubyToExpected(converter, target, 'move(10)')[0]
                        ]
                    }
                ];
                convertAndExpectToEqualBlocks(converter, target, code, expected);
            });

            test('invalid', () => {
                [
                    'repeat(10)',
                    'repeat(10, 1)'
                ].forEach(c => {
                    convertAndExpectToEqualRubyStatement(converter, target, c, c);
                });

                [
                    'repeat(10) { |i| }',
                    'repeat("10") { }'
                ].forEach(c => {
                    const res = converter.targetCodeToBlocks(target, c);
                    expect(converter.errors).toHaveLength(0);
                    const scriptIds = Object.keys(converter.blocks).filter(id => converter.blocks[id].topLevel);
                    expect(scriptIds).toHaveLength(1);
                    expect(converter.blocks[scriptIds[0]]).toHaveProperty('opcode', 'ruby_statement_with_block');
                    expect(res).toBeTruthy();
                });
            });
        });
    });

    describe('control_forever', () => {
        test('loop', () => {
            code = 'loop { wait }';
            expected = [
                {
                    opcode: 'control_forever',
                    branches: []
                }
            ];
            convertAndExpectToEqualBlocks(converter, target, code, expected);

            code = 'loop { bounce_if_on_edge; wait }';
            expected = [
                {
                    opcode: 'control_forever',
                    branches: [
                        {
                            opcode: 'motion_ifonedgebounce'
                        }
                    ]
                }
            ];
            convertAndExpectToEqualBlocks(converter, target, code, expected);

            code = 'loop { bounce_if_on_edge; move(10); wait }';
            expected = [
                {
                    opcode: 'control_forever',
                    branches: [
                        rubyToExpected(converter, target, 'bounce_if_on_edge; move(10)')[0]
                    ]
                }
            ];
            convertAndExpectToEqualBlocks(converter, target, code, expected);
        });

        test('forever', () => {
            code = 'forever { }';
            expected = [
                {
                    opcode: 'control_forever',
                    branches: []
                }
            ];
            convertAndExpectToEqualBlocks(converter, target, code, expected);

            code = 'forever { bounce_if_on_edge }';
            expected = [
                {
                    opcode: 'control_forever',
                    branches: [
                        {
                            opcode: 'motion_ifonedgebounce'
                        }
                    ]
                }
            ];
            convertAndExpectToEqualBlocks(converter, target, code, expected);

            code = 'forever { bounce_if_on_edge; move(10) }';
            expected = [
                {
                    opcode: 'control_forever',
                    branches: [
                        rubyToExpected(converter, target, 'bounce_if_on_edge; move(10)')[0]
                    ]
                }
            ];
            convertAndExpectToEqualBlocks(converter, target, code, expected);

            code = 'forever { wait }';
            expected = [
                {
                    opcode: 'control_forever',
                    branches: [
                        rubyToExpected(converter, target, 'wait')[0]
                    ]
                }
            ];
            convertAndExpectToEqualBlocks(converter, target, code, expected);
        });

        test('invalid', () => {
            [
                'loop()',
                'loop(1)',
                'forever()',
                'forever(1)'
            ].forEach(s => {
                convertAndExpectToEqualRubyStatement(converter, target, s, s);
            });

            [
                'loop { bounce_if_on_edge }',
                'loop { |a| bounce_if_on_edge; wait }',
                'loop(1) { bounce_if_on_edge; wait }',
                'forever(1) { bounce_if_on_edge }',
                'forever(1) { |a| bounce_if_on_edge }'
            ].forEach(s => {
                expect(converter.targetCodeToBlocks(target, s)).toBeTruthy();
                const blockId = Object.keys(converter.blocks).filter(id => converter.blocks[id].topLevel)[0];
                expect(converter.blocks[blockId].opcode).toEqual('ruby_statement_with_block');
            });
        });
    });

    describe('control_if', () => {
        test('normal', () => {
            code = `
                if touching?("_edge_")
                  bounce_if_on_edge
                end
            `;
            expected = [
                {
                    opcode: 'control_if',
                    inputs: [
                        {
                            name: 'CONDITION',
                            block: rubyToExpected(converter, target, 'touching?("_edge_")')[0]
                        }
                    ],
                    branches: [
                        rubyToExpected(converter, target, 'bounce_if_on_edge')[0]
                    ]
                }
            ];
            convertAndExpectToEqualBlocks(converter, target, code, expected);

            code = `
                if touching?("_edge_")
                  bounce_if_on_edge
                  move(10)
                end
            `;
            expected = [
                {
                    opcode: 'control_if',
                    inputs: [
                        {
                            name: 'CONDITION',
                            block: rubyToExpected(converter, target, 'touching?("_edge_")')[0]
                        }
                    ],
                    branches: [
                        rubyToExpected(converter, target, 'bounce_if_on_edge; move(10)')[0]
                    ]
                }
            ];
            convertAndExpectToEqualBlocks(converter, target, code, expected);
        });

        test('false', () => {
            code = `
                if false
                end
            `;
            expected = [
                {
                    opcode: 'control_if',
                    inputs: [],
                    branches: [
                        null
                    ]
                }
            ];
            convertAndExpectToEqualBlocks(converter, target, code, expected);
        });

        test('error', () => {
            code = `
                if move(10)
                end
            `;
            const res = converter.targetCodeToBlocks(target, code);
            expect(converter.errors).toHaveLength(1);
            expect(converter.errors[0].text).toMatch(/condition is not boolean: move\(10\)/);
            expect(res).toBeFalsy();
        });
    });

    describe('control_if_else', () => {
        test('normal', () => {
            code = `
                if touching?("_edge_")
                  bounce_if_on_edge
                else
                  move(10)
                end
            `;
            expected = [
                {
                    opcode: 'control_if_else',
                    inputs: [
                        {
                            name: 'CONDITION',
                            block: rubyToExpected(converter, target, 'touching?("_edge_")')[0]
                        }
                    ],
                    branches: [
                        rubyToExpected(converter, target, 'bounce_if_on_edge')[0],
                        rubyToExpected(converter, target, 'move(10)')[0]
                    ]
                }
            ];
            convertAndExpectToEqualBlocks(converter, target, code, expected);

            code = `
                if touching?("_edge_")
                  bounce_if_on_edge
                  bounce_if_on_edge
                else
                  move(10)
                  move(10)
                end
            `;
            expected = [
                {
                    opcode: 'control_if_else',
                    inputs: [
                        {
                            name: 'CONDITION',
                            block: rubyToExpected(converter, target, 'touching?("_edge_")')[0]
                        }
                    ],
                    branches: [
                        rubyToExpected(converter, target, 'bounce_if_on_edge; bounce_if_on_edge')[0],
                        rubyToExpected(converter, target, 'move(10); move(10)')[0]
                    ]
                }
            ];
            convertAndExpectToEqualBlocks(converter, target, code, expected);

            code = `
                if touching?("_edge_")
                else
                  move(10)
                end
            `;
            expected = [
                {
                    opcode: 'control_if_else',
                    inputs: [
                        {
                            name: 'CONDITION',
                            block: rubyToExpected(converter, target, 'touching?("_edge_")')[0]
                        }
                    ],
                    branches: [
                        null,
                        rubyToExpected(converter, target, 'move(10)')[0]
                    ]
                }
            ];
            convertAndExpectToEqualBlocks(converter, target, code, expected);

            code = `
                if touching?("_edge_")
                  bounce_if_on_edge
                else
                end
            `;
            expected = [
                {
                    opcode: 'control_if_else',
                    inputs: [
                        {
                            name: 'CONDITION',
                            block: rubyToExpected(converter, target, 'touching?("_edge_")')[0]
                        }
                    ],
                    branches: [
                        rubyToExpected(converter, target, 'bounce_if_on_edge')[0]
                    ]
                }
            ];
            convertAndExpectToEqualBlocks(converter, target, code, expected);

            code = `
                if touching?("_edge_")
                else
                end
            `;
            expected = [
                {
                    opcode: 'control_if_else',
                    inputs: [
                        {
                            name: 'CONDITION',
                            block: rubyToExpected(converter, target, 'touching?("_edge_")')[0]
                        }
                    ],
                    branches: []
                }
            ];
            convertAndExpectToEqualBlocks(converter, target, code, expected);
        });

        test('false', () => {
            code = `
                if false
                  bounce_if_on_edge
                else
                  move(10)
                end
            `;
            expected = [
                {
                    opcode: 'control_if_else',
                    inputs: [],
                    branches: [
                        rubyToExpected(converter, target, 'bounce_if_on_edge')[0],
                        rubyToExpected(converter, target, 'move(10)')[0]
                    ]
                }
            ];
            convertAndExpectToEqualBlocks(converter, target, code, expected);

            code = `
                if false
                else
                end
            `;
            expected = [
                {
                    opcode: 'control_if_else',
                    branches: []
                }
            ];
            convertAndExpectToEqualBlocks(converter, target, code, expected);
        });

        test('error', () => {
            code = `
                if move(10)
                else
                end
            `;
            const res = converter.targetCodeToBlocks(target, code);
            expect(converter.errors).toHaveLength(1);
            expect(converter.errors[0].text).toMatch(/condition is not boolean: move\(10\)/);
            expect(res).toBeFalsy();
        });
    });
});
