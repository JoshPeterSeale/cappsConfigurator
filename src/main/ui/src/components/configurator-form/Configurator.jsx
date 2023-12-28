import { Field, reduxForm } from "redux-form"
import { useState } from "react";

// Generic Configurator that can be altered by 
function Configurator({form, formFieldArray, classNamePrepend, handleSubmit, buttonText }) {
    
    
    return(
        <form onSubmit={handleSubmit}>
            <div className={form}>
                {formFieldArray.map((fieldELement) => (
                    <div className={classNamePrepend + ' - ' + fieldELement.name}>
                        <label> {fieldELement.label} </label>
                        <Field 
                            name={fieldELement.label}
                            component={fieldELement.component}
                            type={fieldELement.type}
                            label={fieldELement.label}
                            placeholder={fieldELement.placeholder}
                        />
                    </div>
                ))}
                <button type="submit"> {buttonText} </button>
            </div>
        </form>
    );

}

  
export default reduxForm({
    //form: {form}
  })(Configurator)