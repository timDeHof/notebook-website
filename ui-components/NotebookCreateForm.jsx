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
import { Notebook, Subject as Subject0, Page } from "../models";
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
export default function NotebookCreateForm(props) {
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
    name: "",
    Subject: undefined,
    Pages: [],
    pageCount: "",
    description: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [Subject, setSubject] = React.useState(initialValues.Subject);
  const [Pages, setPages] = React.useState(initialValues.Pages);
  const [pageCount, setPageCount] = React.useState(initialValues.pageCount);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setSubject(initialValues.Subject);
    setCurrentSubjectValue(undefined);
    setCurrentSubjectDisplayValue("");
    setPages(initialValues.Pages);
    setCurrentPagesValue(undefined);
    setCurrentPagesDisplayValue("");
    setPageCount(initialValues.pageCount);
    setDescription(initialValues.description);
    setErrors({});
  };
  const [currentSubjectDisplayValue, setCurrentSubjectDisplayValue] =
    React.useState("");
  const [currentSubjectValue, setCurrentSubjectValue] =
    React.useState(undefined);
  const SubjectRef = React.createRef();
  const [currentPagesDisplayValue, setCurrentPagesDisplayValue] =
    React.useState("");
  const [currentPagesValue, setCurrentPagesValue] = React.useState(undefined);
  const PagesRef = React.createRef();
  const getIDValue = {
    Subject: (r) => JSON.stringify({ id: r?.id }),
    Pages: (r) => JSON.stringify({ id: r?.id }),
  };
  const SubjectIdSet = new Set(
    Array.isArray(Subject)
      ? Subject.map((r) => getIDValue.Subject?.(r))
      : getIDValue.Subject?.(Subject)
  );
  const PagesIdSet = new Set(
    Array.isArray(Pages)
      ? Pages.map((r) => getIDValue.Pages?.(r))
      : getIDValue.Pages?.(Pages)
  );
  const subjectRecords = useDataStoreBinding({
    type: "collection",
    model: Subject0,
  }).items;
  const pageRecords = useDataStoreBinding({
    type: "collection",
    model: Page,
  }).items;
  const getDisplayValue = {
    Subject: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    Pages: (r) => `${r?.title ? r?.title + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [{ type: "Required" }],
    Subject: [],
    Pages: [],
    pageCount: [],
    description: [],
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
          Subject,
          Pages,
          pageCount,
          description,
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
          const modelFieldsToSave = {
            name: modelFields.name,
            Subject: modelFields.Subject,
            pageCount: modelFields.pageCount,
            description: modelFields.description,
          };
          const notebook = await DataStore.save(
            new Notebook(modelFieldsToSave)
          );
          const promises = [];
          promises.push(
            ...Pages.reduce((promises, original) => {
              promises.push(
                DataStore.save(
                  Page.copyOf(original, (updated) => {
                    updated.Notebook = notebook;
                  })
                )
              );
              return promises;
            }, [])
          );
          await Promise.all(promises);
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
      {...getOverrideProps(overrides, "NotebookCreateForm")}
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
              Subject,
              Pages,
              pageCount,
              description,
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
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              name,
              Subject: value,
              Pages,
              pageCount,
              description,
            };
            const result = onChange(modelFields);
            value = result?.Subject ?? value;
          }
          setSubject(value);
          setCurrentSubjectValue(undefined);
          setCurrentSubjectDisplayValue("");
        }}
        currentFieldValue={currentSubjectValue}
        label={"Subject"}
        items={Subject ? [Subject] : []}
        hasError={errors?.Subject?.hasError}
        errorMessage={errors?.Subject?.errorMessage}
        getBadgeText={getDisplayValue.Subject}
        setFieldValue={(model) => {
          setCurrentSubjectDisplayValue(
            model ? getDisplayValue.Subject(model) : ""
          );
          setCurrentSubjectValue(model);
        }}
        inputFieldRef={SubjectRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Subject"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Subject"
          value={currentSubjectDisplayValue}
          options={subjectRecords
            .filter((r) => !SubjectIdSet.has(getIDValue.Subject?.(r)))
            .map((r) => ({
              id: getIDValue.Subject?.(r),
              label: getDisplayValue.Subject?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentSubjectValue(
              subjectRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentSubjectDisplayValue(label);
            runValidationTasks("Subject", label);
          }}
          onClear={() => {
            setCurrentSubjectDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Subject?.hasError) {
              runValidationTasks("Subject", value);
            }
            setCurrentSubjectDisplayValue(value);
            setCurrentSubjectValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Subject", currentSubjectDisplayValue)
          }
          errorMessage={errors.Subject?.errorMessage}
          hasError={errors.Subject?.hasError}
          ref={SubjectRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Subject")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              Subject,
              Pages: values,
              pageCount,
              description,
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
      <TextField
        label="Page count"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={pageCount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              Subject,
              Pages,
              pageCount: value,
              description,
            };
            const result = onChange(modelFields);
            value = result?.pageCount ?? value;
          }
          if (errors.pageCount?.hasError) {
            runValidationTasks("pageCount", value);
          }
          setPageCount(value);
        }}
        onBlur={() => runValidationTasks("pageCount", pageCount)}
        errorMessage={errors.pageCount?.errorMessage}
        hasError={errors.pageCount?.hasError}
        {...getOverrideProps(overrides, "pageCount")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              Subject,
              Pages,
              pageCount,
              description: value,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
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
