import { Field, getFormValues, reduxForm, change } from "redux-form"
import { connect } from "react-redux";
import ConfiguratorOutput from "./ConfiguratorOutput";
import './NonInterchangeableConfiguratorForm.css';
import { gql, useQuery } from "@apollo/client";
import {useState} from 'react';

let GET_OPTIONS = gql`
query GetParameters {
    getAccuracies{
      accuracyCode
      accuracyLabel
    }
    
    getAccessories{
      accessoryCode
      accessoryLabel
    }
    
    getBlockTypesA{
      blockTypeCode
      blockTypeLabel
    }
    
    getBlockTypesB{
      blockTypeCode
      blockTypeLabel
    }

    getDimensions
    
    getMountTypes{
      mountTypeCode
      mountTypeLabel
    }
    
    getPreloads {
      preloadCode
      preloadLabel
      preloadCondition
    }
    
    getSpecialTreatmentTypes{
      treatmentCode
      treatmentLabel
    }
  }
`
function NonInterchangeableConfiguratorForm() {

    const { loading, error, data } = useQuery(GET_OPTIONS);

    let [calculateFlag, setCalculateFlag] = useState(false);

    let handleSubmit = (event) => {
        event.preventDefault();
        setCalculateFlag(true);
    }

    return(
        <div>
            {data &&
            <div>
                {calculateFlag &&
                <div className="form-output">
                    <ConfiguratorOutput />
                </div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-container">
                        <div className="field-item">
                            <p className="field-header"> Block Type A</p>
                            <Field
                            name='block-type-a'
                            component='select'
                            label='block type A'
                            >
                                <option></option>
                                {data.getBlockTypesA.map(blockType => {
                                    return(<option value={blockType.blockTypeCode}> {blockType.blockTypeLabel} </option>);
                                })}
                            </Field>
                            <p className="index"> 1 </p>
                        </div>
                        
                        <div className="field-item">
                            <p className="field-header"> Dimensions mm</p>
                            <Field 
                            name='dimensions'
                            component='select'
                            label='dimensions'
                            >
                                <option></option>
                                {data.getDimensions.map(dimensions => {
                                    return(<option value={dimensions}> {dimensions} </option>);
                                })}
                            </Field>
                            <p className="index"> 2 </p>
                        </div>
                        <div className="field-item">
                            <p className="field-header"> Block Type B</p>
                            <Field
                            name='block-type-b'
                            component='select'
                            label='block type B'
                            >
                                <option></option>
                                {data.getBlockTypesB.map(blockType => {
                                    return(<option value={blockType.blockTypeCode}> {blockType.blockTypeLabel} </option>);
                                })}
                            </Field>
                            <p className="index"> 3 </p>
                        </div>
                        <div className="field-item">
                            <p className="field-header"> Number of Blocks Per Rail</p>
                            <Field 
                            name='blocks-per-rail'
                            component='input'
                            label='blocks-per-rail'
                            placeholder='blocks per rail'
                            />
                            <p className="index"> 4 </p>
                        </div> 
                        <div className="field-item">
                            <p className="field-header"> Mounting Type</p>
                            <Field
                            name='mount-type'
                            component='select'
                            label='Mount Type'
                            >
                                <option></option>
                                {data.getMountTypes.map(mountType => {
                                    return(<option value={mountType.mountTypeCode}> {mountType.mountTypeLabel} </option>);
                                })}
                            </Field>
                            <p className="index"> 5 </p>
                        </div>
                        <div className="field-item">
                            <p className="field-header"> Length</p>
                            <Field
                            name='length'
                            component='input'
                            label='length'
                            placeholder='length (mm)'
                            />
                            <p className="index"> 6 </p>
                        </div>
                        <div className="field-item">
                        <p className="field-header"> Special Treatment</p>
                        <Field
                            name='special-treatment-type'
                            component='select'
                            label='Special Treatment Type'
                            >
                                <option></option>
                                {data.getSpecialTreatmentTypes.map(treatment => {
                                    return(<option value={treatment.treatmentCode}> {treatment.treatmentLabel} </option>);
                                })}
                            </Field>
                            <p className="index"> 7 </p>
                        </div>
                        <div className="field-item">
                            <p className="field-header"> Acccessory</p>    
                            <Field
                            name='accessory'
                            component='select'
                            label='Accessory'
                            >
                                <option></option>
                                {data.getAccessories.map(accessory => {
                                    return(<option value={accessory.accessoryCode}> {accessory.accessoryLabel} </option>);
                                })}
                            </Field>
                            <p className="index"> 8 </p>
                        </div>
                        <div className="field-item">
                            <p className="field-header"> Preload </p>
                            <Field
                            name='preload'
                            component='select'
                            label='Preload'
                            >
                                <option></option>
                                {data.getPreloads.map(preload => {
                                    return(<option value={preload.preloadCode}> {preload.preloadLabel} </option>);
                                })}
                            </Field>
                            <p className="index"> 9 </p>
                        </div>
                        <div className="field-item">
                            <p className="field-header"> Accuracy Class</p>
                            <Field
                            name='accuracy-class'
                            component='select'
                            label='accuracy-class'
                            >
                                <option></option>
                                {data.getAccuracies.map(accuracy => {
                                    return(<option value={accuracy.accuracyCode}> {accuracy.accuracyLabel} </option>);
                                })}
                            </Field>
                            <p className="index"> 10 </p>
                        </div>
                        <div className="field-item">
                            <p className="field-header"> Rails per Axis</p>
                            <Field
                            name='rails-per-axis'
                            component='input'
                            label='rails-per-axis'
                            placeholder='rails per axis'
                            />
                            <p className="index"> 11 </p>
                        </div>
                        <div className="field-submission"> 
                            <button type="submit"> Configure! </button>
                        </div>
                    </div>
                </form>
            </div>}
            {loading && 
            <div> 
                <p> Loading</p>
            </div>}
            {error &&
            <div>
                <p> Error </p>
            </div>}
        </div>
    );
}

let mapStateToProps = state => ({
    configuratorProps: getFormValues('configurator')(state),  
});

export default reduxForm({
    form: 'configurator',
    destroyOnUnmount: false
})(connect(mapStateToProps, {change})(NonInterchangeableConfiguratorForm))