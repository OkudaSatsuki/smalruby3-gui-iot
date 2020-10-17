/**
 * Define Ruby code generator for Rboard Blocks
 * @param {RubyGenerator} Generator The RubyGenerator
 * @return {RubyGenerator} same as param.
 */
export default function (Generator) {
    const getUnquoteText = function (block, fieldName, order) {
        const input = block.inputs[fieldName];
        if (input) {
            const targetBlock = Generator.getBlock(input.block);
            if (targetBlock && targetBlock.opcode === 'text') {
                return Generator.getFieldValue(targetBlock, 'TEXT') || '';
            }
        }
        return Generator.valueToCode(block, fieldName, order);
    };
    
    Generator.rboard_statement = function (block) {
        const statement = getUnquoteText(block, 'STATEMENT', Generator.ORDER_NONE);
        return `${statement}\n`;
    };
    
    Generator.mrubyc_rboard_gpio_init_output = function (block) {
        const pin = Generator.getFieldValue(block, 'PIN') || null;
        return `pinMode(${pin},0)\n`;
    };

    Generator.mrubyc_rboard_gpio_init_input = function (block) {
        const pin = Generator.getFieldValue(block, 'PIN') || null;
        return `pinMode(${pin},1)\n`;
    };
    
    Generator.mrubyc_rboard_gpio_set_level = function (block) {
        const pin = Generator.getFieldValue(block, 'PIN') || null;
        const state = Generator.getFieldValue(block, 'STATE') || null;
        return `digitalWrite(${pin},${state})\n`;
    };

    Generator.mrubyc_rboard_pin_state = function (block) {
        const pin = Generator.getFieldValue(block, 'PIN') || null;
        return [`digitalRead(${pin})\n`, Generator.ORDER_ATOMIC];
    };

    Generator.mrubyc_rboard_pin_init = function (block) {
        return `pinInit\n`;
    };

    Generator.mrubyc_rboard_puts = function (block) {
        const str = Generator.valueToCode(block, 'STR') || null;
        return `puts(${str})\n`;
    };

    Generator.mrubyc_rboard_adc_init = function (block) {
        return `adc = ADC.new()\nadc.ch(7)\n`;
    };

    Generator.mrubyc_rboard_adc_start = function (block) {
        return `adc.start\n`;
    };

    Generator.mrubyc_rboard_adc_stop = function (block) {
        return `adc.stop\n`;
    };

    Generator.mrubyc_rboard_adc_read = function (block) {
        return `adc.read\n`;
    };

    Generator.mrubyc_rboard_adc_read_v = function (block) {
        return `adc.read_v\n`;
    };

    Generator.mrubyc_rboard_adc_temp = function (block) {
        return `temp = 1.0/(Math.log(a)/4275+1/298.15)-273.15\n`;
    };

    Generator.mrubyc_rboard_i2c_write = function (block) {
        return `I2C.write(0x18, 0x08, 0x03)\n`;
    };

    Generator.mrubyc_rboard_i2c_read = function (block) {
        return `ans = I2C.read(0x18,0x05,2)\n a = ans[1] | ((ans[0] & 0x1f)<<8)\n`;
    };

    Generator.mrubyc_rboard_i2c_temp= function (block) {
        return `a = (a.to_f)* 0.0625\n`;
    };

    Generator.mrubyc_rboard_pwm_init = function (block) {
        return `PWM.new()\nPWM.pin(16)`;
    };

    Generator.mrubyc_rboard_pwm_start = function (block) {
        return `PWM.start(2)`;
    };

    Generator.mrubyc_rboard_pwm_start = function (block) {
        return `PWM.stop(2)`;
    };

    Generator.mrubyc_rboard_time_init = function (block) {
        return `Timer.new()\n`;
    };

    Generator.mrubyc_rboard_time_start = function (block) {
        return `Timer.start\n`;
    };

    Generator.mrubyc_rboard_time_stop = function (block) {
        return `Timer.stop\n`;
    };

    Generator.mrubyc_rboard_time_clear = function (block) {
        return `Timer.count_clear\n`;
    };

    Generator.mrubyc_rboard_grove_buzzer_ling = function (block) {
        const buzzer = Generator.getFieldValue(block, 'BUZZER') || null;
        return `PWM.cycle(${buzzer}, 4)\n`;
    };

    Generator.mrubyc_rboard_grove_buzzer_use = function (block) {
        return `PWM.new()\nPWM.pin(16)\nPWM.start(2)\n`;
    };
    
    Generator.mrubyc_rboard_mcp9808_use = function (block) {
        return `I2C.write(0x18, 0x08, 0x03)\n`;
    };

    Generator.mrubyc_rboard_mcp9808_temp = function (block) {
        const temp_var = Generator.valueToCode(block, 'TEMP_VAR') || null;
        const sensor_var = Generator.valueToCode(block, 'SENSOR_VAR') || null;
        return `${temp_var} = ${sensor_var}[1] | ((${sensor_var}[0] & 0x1f) << 8)\n${temp_var} = (${temp_var}.to_f) * 0.0625\n`;
    };

    Generator.mrubyc_rboard_mcp9808_measure = function (block) {
        const variable = Generator.valueToCode(block, 'VARIABLE') || null;
        return `${variable} = I2C.read(0x18, 0x05, 2)\n`;
    };

    return Generator;
}
