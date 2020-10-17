/**
 * Define Ruby blocks
 * @param {ScratchBlocks} ScratchBlocks target to define Ruby blocks.
 * @return {ScratchBlocks} ScratchBlocks defined ScratchBlocks.
 */
export default function (ScratchBlocks) {
    const name = 'ruby';
    const name2 = 'rboard';
    if (ScratchBlocks.Categories.hasOwnProperty(name)) {
        return ScratchBlocks;
    }
    if (ScratchBlocks.Categories.hasOwnProperty(name2)) {
        return ScratchBlocks;
    }
    ScratchBlocks.Categories[name] = name;
    ScratchBlocks.Colours[name] = {
        primary: '#CC0043',
        secondary: '#DB4D7B',
        tertiary: '#7A0028'
    };
    ScratchBlocks.Categories[name2] = name2;
    ScratchBlocks.Colours[name2] = {
        primary: '#00608D',
        secondary: '#2CA9E1',
        tertiary: '#191970'
    };
    ScratchBlocks.Extensions.register(
        `colours_${name}`,
        ScratchBlocks.ScratchBlocks.VerticalExtensions.colourHelper(name)
    );
    ScratchBlocks.Extensions.register(
        `colours_${name2}`,
        ScratchBlocks.ScratchBlocks.VerticalExtensions.colourHelper(name2)
    );

    /* ////////////////////////define ruby blocks////////////////////////// */

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

    ScratchBlocks.Blocks.mrubyc_wifi_enterprise = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_wifi_enterprise',
                message0: '企業Wi-fiに接続する SSID:%1 ユーザー名:%2 パスワード:%3',
                args0: [
                    {
                        type: 'input_value',
                        name: 'SSID'
                    },
                    {
                        type: 'input_value',
                        name: 'USERNAME'
                    },
                    {
                        type: 'input_value',
                        name: 'PASSWORD'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_wifi_personal = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_wifi_personal',
                message0: '個人Wi-fiに接続する SSID:%1 パスワード:%2',
                args0: [
                    {
                        type: 'input_value',
                        name: 'SSID'
                    },
                    {
                        type: 'input_value',
                        name: 'PASSWORD'
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
                message0: '%1を出力モードで使う',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: [
                            ['LED1', '13'],
                            ['LED2', '12'],
                            ['LED3', '14'],
                            ['LED4', '27'],
                            ['LED5', '26'],
                            ['LED6', '25'],
                            ['LED7', '33'],
                            ['LED8', '32'],
                            ['ブザー', '15']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_init_input = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_init_input',
                message0: '%1を入力モードで使う',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: [
                            ['スイッチ1', '34'],
                            ['スイッチ2', '35'],
                            ['スイッチ3', '18'],
                            ['スイッチ4', '19']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_lcd_init = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_lcd_init',
                message0: 'モニターを使う',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_init_adc = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_init_adc',
                message0: '温度計を使う',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_sht_init = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_init_sht',
                message0: '%1ポートの拡張温度センサを使う',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'SHT',
                        options: [
                            ['1', '2,4'],
                            ['2', '5,23']
                        ]
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
                message0: '%1を%2にする',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: [
                            ['LED1', '13'],
                            ['LED2', '12'],
                            ['LED3', '14'],
                            ['LED4', '27'],
                            ['LED5', '26'],
                            ['LED6', '25'],
                            ['LED7', '33'],
                            ['LED8', '32']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: [
                            ['ON', '1'],
                            ['OFF', '0']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_sw_state = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_sw_state',
                message0: '%1の状態',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'SW',
                        options: [
                            ['スイッチ1', '34'],
                            ['スイッチ2', '35'],
                            ['スイッチ3', '18'],
                            ['スイッチ4', '19']
                        ]
                    }
                ],
                extensions: ['colours_ruby', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_sound = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_sound',
                message0: '%1の音を%2ミリ秒鳴らす',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'SOUND',
                        options: [
                            ['ド', '261'],
                            ['レ', '294'],
                            ['ミ', '329'],
                            ['ファ', '349'],
                            ['ソ', '391'],
                            ['ラ', '440'],
                            ['シ', '493'],
                            ['高いド', '523']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'TIME'
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
                message0: '温度計の温度',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_sht_get_temp = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_sht_get_temp',
                message0: '拡張温度センサの気温',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_sht_get_humi = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_sht_get_humi',
                message0: '拡張温度センサの湿度  気温：%1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'TEMP'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_rtc_get_time = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_rtc_get_time',
                message0: '現在の時刻',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_lcd_write = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_lcd_write',
                message0: 'モニターの%1行目に%2と書く',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'LINE',
                        options: [
                            ['1', 'i2c.lcd_write(0x00, [ 0x01, 0x80 ] )\n'],
                            ['2', 'i2c.lcd_write(0x00, [ 0x80 + 0x40 ] )\n']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'TEXT'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_lcd_write_var = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_lcd_write',
                message0: 'モニターの%1行目に%2と書く%3(変数用)',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'LINE',
                        options: [
                            ['1', 'i2c.lcd_write(0x00, [ 0x01, 0x80 ] )\n'],
                            ['2', 'i2c.lcd_write(0x00, [ 0x80 + 0x40 ] )\n']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'TEXT'
                    },
                    {
                        type: 'input_value',
                        name: 'VAR'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_lcd_clean = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_lcd_clean',
                message0: 'モニターの文字を消す',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_ambient_send_to = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_ambient_send_to',
                message0: 'AmbientのチャネルID：%1 リードキー：%2 ライトキー：%3',
                args0: [
                    {
                        type: 'input_value',
                        name: 'ID'
                    },
                    {
                        type: 'input_value',
                        name: 'RKEY'
                    },
                    {
                        type: 'input_value',
                        name: 'WKEY'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_ambient_add_data = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_ambient_add_data',
                message0: '送るデータ %1%2 %3%4',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'D1',
                        options: [
                            ['d1', 'd1'],
                            ['d2', 'd2'],
                            ['d3', 'd3'],
                            ['d4', 'd4'],
                            ['d5', 'd5'],
                            ['d6', 'd6'],
                            ['d7', 'd7'],
                            ['d8', 'd8']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'DATA1'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'D2',
                        options: [
                            ['d1', 'd1'],
                            ['d2', 'd2'],
                            ['d3', 'd3'],
                            ['d4', 'd4'],
                            ['d5', 'd5'],
                            ['d6', 'd6'],
                            ['d7', 'd7'],
                            ['d8', 'd8']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'DATA2'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_ambient_data_send = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_ambient_data_send',
                message0: 'Ambientにデータを送信',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };
    
    ScratchBlocks.Blocks.mrubyc_while = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_while',
                message0: '%1の間繰り返す',
                message1: '%1',
                message2: '',
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

    ScratchBlocks.Blocks.mrubyc_puts = {
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

    ScratchBlocks.Blocks.mrubyc_puts_var = {
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

    /* ////////////////////////define rboard blocks////////////////////////// */

    ScratchBlocks.Blocks.mrubyc_rboard_gpio_init_output = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_rboard_gpio_init_output',
                message0: '%1を出力モードで使う',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: [
                            ['LED1', '0'],
                            ['LED2', '1'],
                            ['LED3', '5'],
                            ['LED4', '6']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_rboard', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_rboard_gpio_init_input = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_rboard_gpio_init_input',
                message0: '%1を入力モードで使う',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: [
                            ['外部スイッチ', '16']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_rboard', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_rboard_gpio_set_level = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_rboard_gpio_set_level',
                message0: '%1を%2にする',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: [
                            ['LED1', '0'],
                            ['LED2', '1'],
                            ['LED3', '5'],
                            ['LED4', '6']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: [
                            ['ON', '1'],
                            ['OFF', '0']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_rboard', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_rboard_pin_state = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_rboard_pin_state',
                message0: '%1の状態',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: [
                            ['外部スイッチ', '16'],
                            ['LED1', '0'],
                            ['LED2', '1'],
                            ['LED3', '5'],
                            ['LED4', '6']
                        ]
                    }
                ],
                extensions: ['colours_rboard', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_rboard_pin_init = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_rboard_pin_init',
                message0: 'すべてのpinを初期化',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_rboard', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_rboard_puts = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_rboard_puts',
                message0: 'ターミナルに%1を出力',
                args0: [
                    {
                        type: 'input_value',
                        name: 'STR'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_rboard', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_rboard_adc_init = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_rboard_adc_init',
                message0: 'ADCを使う',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_rboard', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_rboard_adc_start = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_rboard_adc_start',
                message0: 'ADCスタート',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_rboard', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_rboard_adc_stop = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_rboard_adc_stop',
                message0: 'ADCストップ',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_rboard', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_rboard_adc_stop = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_rboard_adc_stop',
                message0: 'ADCストップ',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_rboard', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_rboard_adc_read = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_rboard_adc_read',
                message0: 'ADC値を取得(整数値)',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_rboard', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_rboard_adc_read_v = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_rboard_adc_read_V',
                message0: 'ADC値を取得(電圧)',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_rboard', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_rboard_adc_temp = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_rboard_adc_temp',
                message0: 'ADC値⇒気温',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_rboard', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_rboard_i2c_write = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_rboard_i2c_write',
                message0: 'I2Cに書き込み',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_rboard', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_rboard_i2c_read = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_rboard_i2c_read',
                message0: 'I2Cから読み込み',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_rboard', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_rboard_i2c_temp = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_rboard_i2c_temp',
                message0: 'I2C⇒気温',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_rboard', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_rboard_pwm_init = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_rboard_pwm_init',
                message0: 'PWMを使う',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_rboard', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_rboard_pwm_start = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_rboard_pwm_start',
                message0: 'PWMスタート',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_rboard', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_rboard_pwm_stop = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_rboard_pwm_stop',
                message0: 'PWMストップ',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_rboard', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_rboard_time_init = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_rboard_time_init',
                message0: 'タイマーを使う',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_rboard', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_rboard_time_start = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_rboard_time_start',
                message0: 'タイマースタート',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_rboard', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_rboard_time_stop = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_rboard_time_stop',
                message0: 'タイマーストップ',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_rboard', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_rboard_time_clear = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_rboard_time_clear',
                message0: 'タイマークリア',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_rboard', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_rboard_grove_buzzer_ling = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_rboard_grove_buzzer_ling',
                message0: '%1の音のブザーを鳴らす',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'BUZZER',
                        options: [
                            ['ド', '0x4F3'],
                            ['レ', '0x58C'],
                            ['ミ', '0x639'],
                            ['ファ', '0x6EF'],
                            ['ソ', '0x76A'],
                            ['ラ', '0x84D'],
                            ['シ', '0x95A']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_rboard', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_rboard_grove_buzzer_use = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_rboard_grove_buzzer_use',
                message0: 'ブザーを使う',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_rboard', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_rboard_mcp9808_use = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_rboard_mcp9808_use',
                message0: '温度計を使う',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_rboard', 'shape_statement']
            });
        }
    };
    
    ScratchBlocks.Blocks.mrubyc_rboard_mcp9808_temp = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_rboard_mcp9808_temp',
                message0: '%1に%2を温度に変換した値を格納',
                args0: [
                    {
                        type: 'input_value',
                        name: 'TEMP_VAR'
                    },
                    {
                        type: 'input_value',
                        name: 'SENSOR_VAR'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_rboard', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_rboard_mcp9808_measure = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_rboard_mcp9808_use',
                message0: '%1に現在の温度計の値を格納',
                args0: [
                    {
                        type: 'input_value',
                        name: 'VARIABLE'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_rboard', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_rboard_sermista_temp = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_rboard_sermista_temp',
                message0: '%1に現在の温度計の温度(サーミスタ温度センサ)を格納',
                args0: [
                    {
                        type: 'input_value',
                        name: 'VARIABLE'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_rboard', 'shape_statement']
            });
        }
    };

    return ScratchBlocks;
}
