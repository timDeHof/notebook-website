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
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { Notes, Tags as Tags0, TagsNotes } from "../models";
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
export default function NotesUpdateForm(props) {
  const {
    id: idProp,
    notes: notesModelProp,
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
    isPublished: false,
    isTrashed: false,
    Tags: [],
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [content, setContent] = React.useState(initialValues.content);
  const [isPublished, setIsPublished] = React.useState(
    initialValues.isPublished
  );
  const [isTrashed, setIsTrashed] = React.useState(initialValues.isTrashed);
  const [Tags, setTags] = React.useState(initialValues.Tags);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = notesRecord
      ? { ...initialValues, ...notesRecord, Tags: linkedTags }
      : initialValues;
    setTitle(cleanValues.title);
    setContent(cleanValues.content);
    setIsPublished(cleanValues.isPublished);
    setIsTrashed(cleanValues.isTrashed);
    setTags(cleanValues.Tags ?? []);
    setCurrentTagsValue(undefined);
    setCurrentTagsDisplayValue("");
    setErrors({});
  };
  const [notesRecord, setNotesRecord] = React.useState(notesModelProp);
  const [linkedTags, setLinkedTags] = React.useState([]);
  const canUnlinkTags = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Notes, idProp)
        : notesModelProp;
      setNotesRecord(record);
      const linkedTags = record
        ? await Promise.all(
            (
              await record.Tags.toArray()
            ).map((r) => {
              return r.tags;
            })
          )
        : [];
      setLinkedTags(linkedTags);
    };
    queryData();
  }, [idProp, notesModelProp]);
  React.useEffect(resetStateValues, [notesRecord, linkedTags]);
  const [currentTagsDisplayValue, setCurrentTagsDisplayValue] =
    React.useState("");
  const [currentTagsValue, setCurrentTagsValue] = React.useState(undefined);
  const TagsRef = React.createRef();
  const getIDValue = {
    Tags: (r) => JSON.stringify({ id: r?.id }),
  };
  const TagsIdSet = new Set(
    Array.isArray(Tags)
      ? Tags.map((r) => getIDValue.Tags?.(r))
      : getIDValue.Tags?.(Tags)
  );
  const tagsRecords = useDataStoreBinding({
    type: "collection",
    model: Tags0,
  }).items;
  const getDisplayValue = {
    Tags: (r) => `${r?.tagName ? r?.tagName + " - " : ""}${r?.id}`,
  };
  const validations = {
    title: [{ type: "Required" }],
    content: [{ type: "Required" }],
    isPublished: [],
    isTrashed: [],
    Tags: [],
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
          isPublished,
          isTrashed,
          Tags,
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
          const tagsToLinkMap = new Map();
          const tagsToUnLinkMap = new Map();
          const tagsMap = new Map();
          const linkedTagsMap = new Map();
          Tags.forEach((r) => {
            const count = tagsMap.get(getIDValue.Tags?.(r));
            const newCount = count ? count + 1 : 1;
            tagsMap.set(getIDValue.Tags?.(r), newCount);
          });
          linkedTags.forEach((r) => {
            const count = linkedTagsMap.get(getIDValue.Tags?.(r));
            const newCount = count ? count + 1 : 1;
            linkedTagsMap.set(getIDValue.Tags?.(r), newCount);
          });
          linkedTagsMap.forEach((count, id) => {
            const newCount = tagsMap.get(id);
            if (newCount) {
              const diffCount = count - newCount;
              if (diffCount > 0) {
                tagsToUnLinkMap.set(id, diffCount);
              }
            } else {
              tagsToUnLinkMap.set(id, count);
            }
          });
          tagsMap.forEach((count, id) => {
            const originalCount = linkedTagsMap.get(id);
            if (originalCount) {
              const diffCount = count - originalCount;
              if (diffCount > 0) {
                tagsToLinkMap.set(id, diffCount);
              }
            } else {
              tagsToLinkMap.set(id, count);
            }
          });
          tagsToUnLinkMap.forEach(async (count, id) => {
            const tagsNotesRecords = await DataStore.query(TagsNotes, (r) =>
              r.and((r) => {
                const recordKeys = JSON.parse(id);
                return [
                  r.tagsId.eq(recordKeys.id),
                  r.notesId.eq(notesRecord.id),
                ];
              })
            );
            for (let i = 0; i < count; i++) {
              promises.push(DataStore.delete(tagsNotesRecords[i]));
            }
          });
          tagsToLinkMap.forEach((count, id) => {
            for (let i = count; i > 0; i--) {
              promises.push(
                DataStore.save(
                  new TagsNotes({
                    notes: notesRecord,
                    tags: tagsRecords.find((r) =>
                      Object.entries(JSON.parse(id)).every(
                        ([key, value]) => r[key] === value
                      )
                    ),
                  })
                )
              );
            }
          });
          const modelFieldsToSave = {
            title: modelFields.title,
            content: modelFields.content,
            isPublished: modelFields.isPublished,
            isTrashed: modelFields.isTrashed,
          };
          promises.push(
            DataStore.save(
              Notes.copyOf(notesRecord, (updated) => {
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
      {...getOverrideProps(overrides, "NotesUpdateForm")}
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
              isPublished,
              isTrashed,
              Tags,
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
              isPublished,
              isTrashed,
              Tags,
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
      <SwitchField
        label="Is published"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isPublished}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              title,
              content,
              isPublished: value,
              isTrashed,
              Tags,
            };
            const result = onChange(modelFields);
            value = result?.isPublished ?? value;
          }
          if (errors.isPublished?.hasError) {
            runValidationTasks("isPublished", value);
          }
          setIsPublished(value);
        }}
        onBlur={() => runValidationTasks("isPublished", isPublished)}
        errorMessage={errors.isPublished?.errorMessage}
        hasError={errors.isPublished?.hasError}
        {...getOverrideProps(overrides, "isPublished")}
      ></SwitchField>
      <SwitchField
        label="Is trashed"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isTrashed}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              title,
              content,
              isPublished,
              isTrashed: value,
              Tags,
            };
            const result = onChange(modelFields);
            value = result?.isTrashed ?? value;
          }
          if (errors.isTrashed?.hasError) {
            runValidationTasks("isTrashed", value);
          }
          setIsTrashed(value);
        }}
        onBlur={() => runValidationTasks("isTrashed", isTrashed)}
        errorMessage={errors.isTrashed?.errorMessage}
        hasError={errors.isTrashed?.hasError}
        {...getOverrideProps(overrides, "isTrashed")}
      ></SwitchField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              title,
              content,
              isPublished,
              isTrashed,
              Tags: values,
            };
            const result = onChange(modelFields);
            values = result?.Tags ?? values;
          }
          setTags(values);
          setCurrentTagsValue(undefined);
          setCurrentTagsDisplayValue("");
        }}
        currentFieldValue={currentTagsValue}
        label={"Tags"}
        items={Tags}
        hasError={errors?.Tags?.hasError}
        errorMessage={errors?.Tags?.errorMessage}
        getBadgeText={getDisplayValue.Tags}
        setFieldValue={(model) => {
          setCurrentTagsDisplayValue(model ? getDisplayValue.Tags(model) : "");
          setCurrentTagsValue(model);
        }}
        inputFieldRef={TagsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Tags"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Tags"
          value={currentTagsDisplayValue}
          options={tagsRecords
            .filter((r) => !TagsIdSet.has(getIDValue.Tags?.(r)))
            .map((r) => ({
              id: getIDValue.Tags?.(r),
              label: getDisplayValue.Tags?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentTagsValue(
              tagsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentTagsDisplayValue(label);
            runValidationTasks("Tags", label);
          }}
          onClear={() => {
            setCurrentTagsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Tags?.hasError) {
              runValidationTasks("Tags", value);
            }
            setCurrentTagsDisplayValue(value);
            setCurrentTagsValue(undefined);
          }}
          onBlur={() => runValidationTasks("Tags", currentTagsDisplayValue)}
          errorMessage={errors.Tags?.errorMessage}
          hasError={errors.Tags?.hasError}
          ref={TagsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Tags")}
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
          isDisabled={!(idProp || notesModelProp)}
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
              !(idProp || notesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
