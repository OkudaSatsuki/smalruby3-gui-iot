/* global Opal */
import _ from 'lodash';

/**
 * Ruby converter
 */
const RubyConverter = {
    // eslint-disable-next-line no-unused-vars
    // メソッド
    onSend: function (receiver, name, args, rubyBlockArgs, rubyBlock) {
        let block;
        if ((this._isSelf(receiver) || receiver === Opal.nil) && !rubyBlock) {
            switch(name){
                case 'initialize_wifi':
                    if(args.length === 4){
                        block = this._createBlock('mrubyc_wifi_enterprise', 'statement');
                        this._addTextInput(block, 'SSID',  args[1], '');
                        this._addTextInput(block, 'USERNAME',  args[2], '');
                        this._addTextInput(block, 'PASSWORD',  args[3], '');
                    }
                    else if(args.length === 3){
                        block = this._createBlock('mrubyc_wifi_personal', 'statement');
                        this._addTextInput(block, 'SSID', args[1],' ');
                        this._addTextInput(block, 'PASSWORD', args[2], ' ');
                    }
                break;

                case 'gpio_init_output':
                    if(args.length === 1){
                        block = this._createBlock('mrubyc_gpio_init_output', 'statement');
                        this._addField(block, 'PIN', args[0]);
                    }
                break;

            }
        }
        return block;
    }
};

export default RubyConverter;