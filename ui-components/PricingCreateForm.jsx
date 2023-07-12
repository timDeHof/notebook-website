/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Pricing } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function PricingCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    plan: "",
    price: "",
    details: [],
    catchPhase: "",
  };
  const [plan, setPlan] = React.useState(initialValues.plan);
  const [price, setPrice] = React.useState(initialValues.price);
  const [details, setDetails] = React.useState(initialValues.details);
  const [catchPhase, setCatchPhase] = React.useState(initialValues.catchPhase);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPlan(initialValues.plan);
    setPrice(initialValues.price);
    setDetails(initialValues.details);
    setCurrentDetailsValue("");
    setCatchPhase(initialValues.catchPhase);
    setErrors({});
  };
  const [currentDetailsValue, setCurrentDetailsValue] = React.useState("");
  const detailsRef = React.createRef();
  const validations = {
    plan: [{ type: "Required" }],
    price: [{ type: "Required" }],
    details: [{ type: "Required" }],
    catchPhase: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          plan,
          price,
          details,
          catchPhase,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Pricing(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PricingCreateForm")}
      {...rest}
    >
      <TextField
        label="Plan"
        isRequired={true}
        isReadOnly={false}
        value={plan}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              plan: value,
              price,
              details,
              catchPhase,
            };
            const result = onChange(modelFields);
            value = result?.plan ?? value;
          }
          if (errors.plan?.hasError) {
            runValidationTasks("plan", value);
          }
          setPlan(value);
        }}
        onBlur={() => runValidationTasks("plan", plan)}
        errorMessage={errors.plan?.errorMessage}
        hasError={errors.plan?.hasError}
        {...getOverrideProps(overrides, "plan")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={true}
        isReadOnly={false}
        value={price}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              plan,
              price: value,
              details,
              catchPhase,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              plan,
              price,
              details: values,
              catchPhase,
            };
            const result = onChange(modelFields);
            values = result?.details ?? values;
          }
          setDetails(values);
          setCurrentDetailsValue("");
        }}
        currentFieldValue={currentDetailsValue}
        label={"Details"}
        items={details}
        hasError={errors?.details?.hasError}
        errorMessage={errors?.details?.errorMessage}
        setFieldValue={setCurrentDetailsValue}
        inputFieldRef={detailsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Details"
          isRequired={true}
          isReadOnly={false}
          value={currentDetailsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.details?.hasError) {
              runValidationTasks("details", value);
            }
            setCurrentDetailsValue(value);
          }}
          onBlur={() => runValidationTasks("details", currentDetailsValue)}
          errorMessage={errors.details?.errorMessage}
          hasError={errors.details?.hasError}
          ref={detailsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "details")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Catch phase"
        isRequired={false}
        isReadOnly={false}
        value={catchPhase}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              plan,
              price,
              details,
              catchPhase: value,
            };
            const result = onChange(modelFields);
            value = result?.catchPhase ?? value;
          }
          if (errors.catchPhase?.hasError) {
            runValidationTasks("catchPhase", value);
          }
          setCatchPhase(value);
        }}
        onBlur={() => runValidationTasks("catchPhase", catchPhase)}
        errorMessage={errors.catchPhase?.errorMessage}
        hasError={errors.catchPhase?.hasError}
        {...getOverrideProps(overrides, "catchPhase")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
