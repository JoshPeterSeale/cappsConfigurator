import { Field, getFormValues, reduxForm, change } from "redux-form"
import { connect } from "react-redux";
import NonInterchangeableConfiguratorOutput from "./NonInterchangeableConfiguratorOutput";
import './NonInterchangeableConfiguratorForm.css';
import { gql, useQuery } from "@apollo/client";

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
/*
{
    "data": {
        "getAccuracies": [
            {
                "accuracyCode": "N",
                "accuracyLabel": "Normal",
                "__typename": "Accuracy"
            },
            {
                "accuracyCode": "H",
                "accuracyLabel": "Senior",
                "__typename": "Accuracy"
            },
            {
                "accuracyCode": "P",
                "accuracyLabel": "Precision",
                "__typename": "Accuracy"
            },
            {
                "accuracyCode": "SP",
                "accuracyLabel": "High Precision",
                "__typename": "Accuracy"
            }
        ],
        "getAccessories": [
            {
                "accessoryCode": "S",
                "accessoryLabel": null,
                "__typename": "Accessory"
            },
            {
                "accessoryCode": "S",
                "accessoryLabel": null,
                "__typename": "Accessory"
            },
            {
                "accessoryCode": "",
                "accessoryLabel": null,
                "__typename": "Accessory"
            }
        ],
        "getBlockTypesA": [
            {
                "blockTypeCode": "H",
                "blockTypeLabel": "High Profile",
                "__typename": "BlockType"
            },
            {
                "blockTypeCode": "S",
                "blockTypeLabel": "Low Profile",
                "__typename": "BlockType"
            }
        ],
        "getBlockTypesB": [
            {
                "blockTypeCode": "A",
                "blockTypeLabel": "Flange type",
                "__typename": "BlockType"
            },
            {
                "blockTypeCode": "B",
                "blockTypeLabel": "Square block",
                "__typename": "BlockType"
            },
            {
                "blockTypeCode": "AL",
                "blockTypeLabel": "Extended flange type",
                "__typename": "BlockType"
            },
            {
                "blockTypeCode": "BL",
                "blockTypeLabel": "Extended square block",
                "__typename": "BlockType"
            }
        ],
        "getMountTypes": [
            {
                "mountTypeCode": "R",
                "mountTypeLabel": "From above",
                "__typename": "MountType"
            },
            {
                "mountTypeCode": "K",
                "mountTypeLabel": "From below",
                "__typename": "MountType"
            }
        ],
        "getPreloads": [
            {
                "preloadCode": "Z0",
                "preloadLabel": "No preload",
                "preloadCondition": "Fixed load direction with low impact and low precision",
                "__typename": "Preload"
            },
            {
                "preloadCode": "Z1",
                "preloadLabel": "Middle preload",
                "preloadCondition": "Light load and high precision",
                "__typename": "Preload"
            },
            {
                "preloadCode": "Z2",
                "preloadLabel": "Heavy preload",
                "preloadCondition": "Requirements for rigidity, vibration and impact",
                "__typename": "Preload"
            }
        ],
        "getSpecialTreatmentTypes": [
            {
                "treatmentCode": "E",
                "treatmentLabel": "None: standard rail",
                "__typename": "SpecialTreatment"
            }
        ]
    }
}


*/

function NonInterchangeableConfiguratorForm() {

    const { loading, error, data } = useQuery(GET_OPTIONS);
    

    if (data) {
        let accuracies = data.getAccuracies;
        let accuracyOptions = accuracies.map(accuracy => accuracy.accuracyLabel);

        let accessories = data.getAccessories;
        let accessoryOptions = accessories.map(accessory => accessory.accessoryLabel);
        console.log(accessoryOptions);

        let blockTypesA = data.getBlockTypesA;
        let blockTypeAOptions = blockTypesA.map(blockType => blockType.blockTypeLabel);

        let blockTypesB = data.getBlockTypesB;
        let blockTypeBOptions = blockTypesB.map(blockType => blockType.blockTypeLabel);

        let mountTypes = data.getMountTypes;
        let mountTypeOptions = mountTypes.map(mountType => mountType.mountTypeLabel);

        let preloads = data.getPreloads;
        let preloadOptions = preloads.map(preload => preloads.preloadLabel);
        let preloadDescriptions = preloads.map(preload => preload.preloadCondition);

        let specialTreatmentTypes = data.getSpecialTreatmentTypes;
        let treatmentTypeOptions = specialTreatmentTypes.map(treatment => treatment.treatmentLabel);
    }

    return(
        <div>
            {data &&
            <div>
                <form>
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
                            <p className="field-header"> Dimensions</p>
                            <Field 
                            name='dimensions'
                            component='input'
                            label='dimensions'
                            placeholder='dimensions'
                            />
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
                    </div>
                    <div className="field-submission"> 
                        <button type="submit"> Configure! </button>
                    </div>
                </form>
                <div className="form-output">
                    <NonInterchangeableConfiguratorOutput productCode={'ABCDEFG'} />
                </div>
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