/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
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
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { Subject, Page } from "../models";
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
export default function SubjectUpdateForm(props) {
  const {
    id: idProp,
    subject: subjectModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    Pages: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [Pages, setPages] = React.useState(initialValues.Pages);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = subjectRecord
      ? { ...initialValues, ...subjectRecord, Pages: linkedPages }
      : initialValues;
    setName(cleanValues.name);
    setPages(cleanValues.Pages ?? []);
    setCurrentPagesValue(undefined);
    setCurrentPagesDisplayValue("");
    setErrors({});
  };
  const [subjectRecord, setSubjectRecord] = React.useState(subjectModelProp);
  const [linkedPages, setLinkedPages] = React.useState([]);
  const canUnlinkPages = true;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Subject, idProp)
        : subjectModelProp;
      setSubjectRecord(record);
      const linkedPages = record ? await record.Pages.toArray() : [];
      setLinkedPages(linkedPages);
    };
    queryData();
  }, [idProp, subjectModelProp]);
  React.useEffect(resetStateValues, [subjectRecord, linkedPages]);
  const [currentPagesDisplayValue, setCurrentPagesDisplayValue] =
    React.useState("");
  const [currentPagesValue, setCurrentPagesValue] = React.useState(undefined);
  const PagesRef = React.createRef();
  const getIDValue = {
    Pages: (r) => JSON.stringify({ id: r?.id }),
  };
  const PagesIdSet = new Set(
    Array.isArray(Pages)
      ? Pages.map((r) => getIDValue.Pages?.(r))
      : getIDValue.Pages?.(Pages)
  );
  const pageRecords = useDataStoreBinding({
    type: "collection",
    model: Page,
  }).items;
  const getDisplayValue = {
    Pages: (r) => `${r?.title ? r?.title + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [{ type: "Required" }],
    Pages: [],
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
          name,
          Pages,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
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
          const promises = [];
          const pagesToLink = [];
          const pagesToUnLink = [];
          const pagesSet = new Set();
          const linkedPagesSet = new Set();
          Pages.forEach((r) => pagesSet.add(getIDValue.Pages?.(r)));
          linkedPages.forEach((r) => linkedPagesSet.add(getIDValue.Pages?.(r)));
          linkedPages.forEach((r) => {
            if (!pagesSet.has(getIDValue.Pages?.(r))) {
              pagesToUnLink.push(r);
            }
          });
          Pages.forEach((r) => {
            if (!linkedPagesSet.has(getIDValue.Pages?.(r))) {
              pagesToLink.push(r);
            }
          });
          pagesToUnLink.forEach((original) => {
            if (!canUnlinkPages) {
              throw Error(
                `Page ${original.id} cannot be unlinked from Subject because undefined is a required field.`
              );
            }
            promises.push(
              DataStore.save(
                Page.copyOf(original, (updated) => {
                  updated.Subject = null;
                })
              )
            );
          });
          pagesToLink.forEach((original) => {
            promises.push(
              DataStore.save(
                Page.copyOf(original, (updated) => {
                  updated.Subject = subjectRecord;
                })
              )
            );
          });
          const modelFieldsToSave = {
            name: modelFields.name,
          };
          promises.push(
            DataStore.save(
              Subject.copyOf(subjectRecord, (updated) => {
                Object.assign(updated, modelFieldsToSave);
              })
            )
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "SubjectUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              Pages,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              Pages: values,
            };
            const result = onChange(modelFields);
            values = result?.Pages ?? values;
          }
          setPages(values);
          setCurrentPagesValue(undefined);
          setCurrentPagesDisplayValue("");
        }}
        currentFieldValue={currentPagesValue}
        label={"Pages"}
        items={Pages}
        hasError={errors?.Pages?.hasError}
        errorMessage={errors?.Pages?.errorMessage}
        getBadgeText={getDisplayValue.Pages}
        setFieldValue={(model) => {
          setCurrentPagesDisplayValue(
            model ? getDisplayValue.Pages(model) : ""
          );
          setCurrentPagesValue(model);
        }}
        inputFieldRef={PagesRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Pages"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Page"
          value={currentPagesDisplayValue}
          options={pageRecords
            .filter((r) => !PagesIdSet.has(getIDValue.Pages?.(r)))
            .map((r) => ({
              id: getIDValue.Pages?.(r),
              label: getDisplayValue.Pages?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentPagesValue(
              pageRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentPagesDisplayValue(label);
            runValidationTasks("Pages", label);
          }}
          onClear={() => {
            setCurrentPagesDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Pages?.hasError) {
              runValidationTasks("Pages", value);
            }
            setCurrentPagesDisplayValue(value);
            setCurrentPagesValue(undefined);
          }}
          onBlur={() => runValidationTasks("Pages", currentPagesDisplayValue)}
          errorMessage={errors.Pages?.errorMessage}
          hasError={errors.Pages?.hasError}
          ref={PagesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Pages")}
        ></Autocomplete>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || subjectModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || subjectModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
