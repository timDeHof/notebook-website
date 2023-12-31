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
import { Page, Subject as Subject0, Notebook as Notebook0 } from "../models";
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
export default function PageCreateForm(props) {
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
    title: "",
    content: "",
    Subject: undefined,
    Notebook: undefined,
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [content, setContent] = React.useState(initialValues.content);
  const [Subject, setSubject] = React.useState(initialValues.Subject);
  const [Notebook, setNotebook] = React.useState(initialValues.Notebook);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTitle(initialValues.title);
    setContent(initialValues.content);
    setSubject(initialValues.Subject);
    setCurrentSubjectValue(undefined);
    setCurrentSubjectDisplayValue("");
    setNotebook(initialValues.Notebook);
    setCurrentNotebookValue(undefined);
    setCurrentNotebookDisplayValue("");
    setErrors({});
  };
  const [currentSubjectDisplayValue, setCurrentSubjectDisplayValue] =
    React.useState("");
  const [currentSubjectValue, setCurrentSubjectValue] =
    React.useState(undefined);
  const SubjectRef = React.createRef();
  const [currentNotebookDisplayValue, setCurrentNotebookDisplayValue] =
    React.useState("");
  const [currentNotebookValue, setCurrentNotebookValue] =
    React.useState(undefined);
  const NotebookRef = React.createRef();
  const getIDValue = {
    Subject: (r) => JSON.stringify({ id: r?.id }),
    Notebook: (r) => JSON.stringify({ id: r?.id }),
  };
  const SubjectIdSet = new Set(
    Array.isArray(Subject)
      ? Subject.map((r) => getIDValue.Subject?.(r))
      : getIDValue.Subject?.(Subject)
  );
  const NotebookIdSet = new Set(
    Array.isArray(Notebook)
      ? Notebook.map((r) => getIDValue.Notebook?.(r))
      : getIDValue.Notebook?.(Notebook)
  );
  const subjectRecords = useDataStoreBinding({
    type: "collection",
    model: Subject0,
  }).items;
  const notebookRecords = useDataStoreBinding({
    type: "collection",
    model: Notebook0,
  }).items;
  const getDisplayValue = {
    Subject: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    Notebook: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    title: [{ type: "Required" }],
    content: [{ type: "Required" }],
    Subject: [],
    Notebook: [],
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
          title,
          content,
          Subject,
          Notebook,
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
          await DataStore.save(new Page(modelFields));
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
      {...getOverrideProps(overrides, "PageCreateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              content,
              Subject,
              Notebook,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Content"
        isRequired={true}
        isReadOnly={false}
        value={content}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              content: value,
              Subject,
              Notebook,
            };
            const result = onChange(modelFields);
            value = result?.content ?? value;
          }
          if (errors.content?.hasError) {
            runValidationTasks("content", value);
          }
          setContent(value);
        }}
        onBlur={() => runValidationTasks("content", content)}
        errorMessage={errors.content?.errorMessage}
        hasError={errors.content?.hasError}
        {...getOverrideProps(overrides, "content")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              title,
              content,
              Subject: value,
              Notebook,
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
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              title,
              content,
              Subject,
              Notebook: value,
            };
            const result = onChange(modelFields);
            value = result?.Notebook ?? value;
          }
          setNotebook(value);
          setCurrentNotebookValue(undefined);
          setCurrentNotebookDisplayValue("");
        }}
        currentFieldValue={currentNotebookValue}
        label={"Notebook"}
        items={Notebook ? [Notebook] : []}
        hasError={errors?.Notebook?.hasError}
        errorMessage={errors?.Notebook?.errorMessage}
        getBadgeText={getDisplayValue.Notebook}
        setFieldValue={(model) => {
          setCurrentNotebookDisplayValue(
            model ? getDisplayValue.Notebook(model) : ""
          );
          setCurrentNotebookValue(model);
        }}
        inputFieldRef={NotebookRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Notebook"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Notebook"
          value={currentNotebookDisplayValue}
          options={notebookRecords
            .filter((r) => !NotebookIdSet.has(getIDValue.Notebook?.(r)))
            .map((r) => ({
              id: getIDValue.Notebook?.(r),
              label: getDisplayValue.Notebook?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentNotebookValue(
              notebookRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentNotebookDisplayValue(label);
            runValidationTasks("Notebook", label);
          }}
          onClear={() => {
            setCurrentNotebookDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Notebook?.hasError) {
              runValidationTasks("Notebook", value);
            }
            setCurrentNotebookDisplayValue(value);
            setCurrentNotebookValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Notebook", currentNotebookDisplayValue)
          }
          errorMessage={errors.Notebook?.errorMessage}
          hasError={errors.Notebook?.hasError}
          ref={NotebookRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Notebook")}
        ></Autocomplete>
      </ArrayField>
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
