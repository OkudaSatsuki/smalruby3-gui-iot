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
        return `digitalRead(${pin})\n`;
    };

    Generator.mrubyc_rboard_pin_init = function (block) {
        return `pinInit\n`;
    };

    return Generator;
}
