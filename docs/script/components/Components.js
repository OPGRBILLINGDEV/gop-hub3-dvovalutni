
class GenericSelect extends React.Component {
    render() {
        let className = "form-field " + this.props.className;
        return(
            <div>
                <select className={className} id={this.props.id} onChange={this.props.onChange} value={this.props.value}>
                    { this.props.children }
                </select>
                { this.props.buttons }
            </div>);
    }
}
class PaymentModels extends React.Component {
    render() {
        return(<GenericSelect className={this.props.className}>
            <option key="" value=""></option>
            { BarcodePayment.PaymentModels.map(({model}) => <option key={model} value={"HR"+model}>{"HR"+model}</option>) }
        </GenericSelect>);
    }
}

class IntentCodes extends React.Component {
    render() {
        return(<GenericSelect className={this.props.className}>
        <option key="" value=""></option>            
            { BarcodePayment.IntentCodes.map(el => <option key={el.code} value={el.code}>{el.code+" -  "+el.title}</option>) }
        </GenericSelect>);
    }
}

class TextInput extends React.Component {
    render() {
        let className = "form-field " + (this.props.className ? this.props.className : '') + (this.props.invalid ? ' form-field-invalid' : '')

        return(<div>
            <input id={this.props.id} className={className} type="text" value={this.props.value} onChange={this.props.onChange} placeholder={this.props.label} maxLength={this.props.maxLength} autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" />
            {this.props.children}
        </div>);
    }
}
class TextAreaInput extends React.Component {
    render() {
        let className = "form-field " + (this.props.className ? this.props.className : '') + (this.props.invalid ? ' form-field-invalid' : '')

        return(
            <textarea className={className} id={this.props.id} cols="33" rows="4" onChange={this.props.onChange} value={this.props.value} placeholder={this.props.label} />
        );
    }
}

class SpremljeniNaloziSelect extends React.Component {
    render() {

        return(
        <GenericSelect label="Šifra namjene" className={this.props.className} buttons={this.props.children}>
            { this.props.popisNaloga.map((el, ix) => <option key={el.key} value={el.key}>{el.naziv_naloga}</option>) }
        </GenericSelect>);
    }
}


export { SpremljeniNaloziSelect, PaymentModels, IntentCodes, TextInput, TextAreaInput }