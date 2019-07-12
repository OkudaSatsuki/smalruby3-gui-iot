/**
 * Define Ruby blocks
 * @param {ScratchBlocks} ScratchBlocks target to define Ruby blocks.
 * @return {ScratchBlocks} ScratchBlocks defined ScratchBlocks.
 */
export default function (ScratchBlocks) {
    const name = 'ruby';
    if (ScratchBlocks.Categories.hasOwnProperty(name)) {
        return ScratchBlocks;
    }
    ScratchBlocks.Categories[name] = name;
    ScratchBlocks.Colours[name] = {
        primary: '#CC0043',
        secondary: '#DB4D7B',
        tertiary: '#7A0028'
    };
    ScratchBlocks.Extensions.register(
        `colours_${name}`,
        ScratchBlocks.ScratchBlocks.VerticalExtensions.colourHelper(name)
    );

    ScratchBlocks.Blocks.ruby_statement = {
        init: function () {
            this.jsonInit({
                type: 'ruby_statement',
                message0: '%1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'STATEMENT'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_init_output = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_init_output',
                message0: 'gpio_init_output(%1)',
                args0: [
                    {
                        type: 'input_value',
                        name: 'PIN'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_set_level = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_set_level',
                message0: 'gpio_set_level(%1,%2)',
                args0: [
                    {
                        type: 'input_value',
                        name: 'PIN'
                    },
                    {
                        type: 'input_value',
                        name: 'STATE'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_while = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_while',
                message0: 'while %1 do',
                message1: '%1',
                message2: 'end',
                args0: [
                    {
                        type: 'input_value',
                        name: 'CONDITION'
                    }
                ],
                args1: [
                    {
                        type: 'input_statement',
                        name: 'SUBSTACK'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_define_function = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_define_class',
                message0: 'def %1',
                message1: '%1',
                message2: 'end',
                args0: [
                    {
                        type: 'input_value',
                        name: 'FUNCTION'
                    }
                ],
                args1: [
                    {
                        type: 'input_statement',
                        name: 'SUBSTACK'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_led_turn_on = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_led_turn_on',
                message0: 'LED ON',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_led_turn_off = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_led_turn_on',
                message0: 'LED OFF',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_thermistor_trans = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_thermistor_trans',
                message0: 'thermistor_trans %1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'VREF'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_thermistor_temperature = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_thermistor_temperature',
                message0: 'thermistor_temperature',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_puts= {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_puts',
                message0: 'puts %1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'OUTPUT'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_puts_var= {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_puts_var',
                message0: 'puts_var %1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'OUTPUT'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_read_adc = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_read_adc',
                message0: 'read_adc',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_init_adc = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_init_adc',
                message0: 'init_adc',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };


   

    ScratchBlocks.Blocks.ruby_statement_with_block = {
        init: function () {
            this.jsonInit({
                type: 'ruby_statement_with_block',
                message0: '%1 do %2',
                message1: '%1',
                message2: 'end',
                args0: [
                    {
                        type: 'input_value',
                        name: 'STATEMENT'
                    },
                    {
                        type: 'input_value',
                        name: 'ARGS'
                    }
                ],
                args1: [
                    {
                        type: 'input_statement',
                        name: 'SUBSTACK'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.ruby_expression = {
        init: function () {
            this.jsonInit({
                type: 'ruby_expression',
                message0: '%1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'EXPRESSION'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'output_boolean']
            });
        }
    };

    ScratchBlocks.Blocks.ruby_range = {
        init: function () {
            this.jsonInit({
                type: 'ruby_range',
                message0: '%1..%2',
                args0: [
                    {
                        type: 'input_value',
                        name: 'FROM'
                    },
                    {
                        type: 'input_value',
                        name: 'TO'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'output_boolean']
            });
        }
    };

    ScratchBlocks.Blocks.ruby_exclude_range = {
        init: function () {
            this.jsonInit({
                type: 'ruby_exclude_range',
                message0: '%1...%2',
                args0: [
                    {
                        type: 'input_value',
                        name: 'FROM'
                    },
                    {
                        type: 'input_value',
                        name: 'TO'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'output_boolean']
            });
        }
    };

    return ScratchBlocks;
}
