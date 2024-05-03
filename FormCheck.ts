import Input from "../FormCheck/Input";

export default class FormCheck {
    #inputs: {[key: string]: Input} = {}

    getInput(name: string): Input {
        return this.#inputs[name];
    }

    addInput(name: string, input: Input): void {
        this.#inputs[name] = input;
    }

    checkForm(formData: {[key: string]: any}): {[key: string]: string} {
        const badInputs = {};

        for (const [name, input] of Object.entries(this.#inputs)) {
            const result = input.checkInput(formData[name]);
            if (result) {
                badInputs[name] = result;
            }
        }

        return badInputs;
    }
}