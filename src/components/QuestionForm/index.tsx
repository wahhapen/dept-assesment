import styled from "@emotion/styled";
import {
  Form,
  FormError,
  FormInput,
  FormLabel,
  FormSubmit,
  useFormState,
} from "ariakit";
import React from "react";
import { colors, mq, mqSimple, sizes } from "../../consts";

const formTitle = "Question? We are here to help!";
const nameLabel = "Name";
const emailLabel = "Email";
const messageLabel = "Message";
const submitText = "Submit";

export function QuestionForm() {
  const form = useFormState({
    defaultValues: { name: "", email: "", message: "" },
  });

  form.useSubmit(() => {
    alert(JSON.stringify(form.values));
  });

  return (
    <FormSectionStyled>
      <FormHeading>{formTitle}</FormHeading>

      <Form state={form} className="form">
        <div className="field">
          <CredRow>
            <CredCol>
              <FormLabel name={form.names.name}>{nameLabel}</FormLabel>
              <FormInput name={form.names.name} />
            </CredCol>
            <CredCol>
              <FormLabel name={form.names.email}>{emailLabel}</FormLabel>
              <FormInput name={form.names.email} type="email" required />
              <FormError className="form-error" name={form.names.email} />
            </CredCol>
          </CredRow>
          <MessageRow>
            <CredCol>
              <FormLabel name={form.names.message}>{messageLabel}</FormLabel>
              <FormInput name={form.names.message} as="textarea" required />
              <FormError name={form.names.message} className="form-error" />
            </CredCol>
          </MessageRow>
        </div>
        <FormSubmit className="submit">{submitText}</FormSubmit>
      </Form>
    </FormSectionStyled>
  );
}

const FormSectionStyled = styled.section`
  position: relative;
  background-color: ${colors.white};
  display: flex;
  ${mqSimple({
    flexDirection: ["column", "row"],
    padding: [
      `${sizes.size48} ${sizes.size36}`,
      `${sizes.size72} ${sizes.size48}`,
    ],
    gap: [`${sizes.size36}`, `${sizes.size64}`],
  })}
  .form {
    width: 100%;
  }
  input,
  textarea {
    position: relative;
    border: none;
    border-bottom: 1px solid ${colors.grey2};
    width: 100%;
    resize: vertical;
    ${mqSimple({
      maxWidth: ["100%", `${sizes.size300}`],
    })}
  }
  textarea {
    min-height: ${sizes.size112};
  }
  .form-error {
    color: ${colors.red};
    text-transform: capitalize;
    position: relative;
    bottom: -${sizes.size10};
    left: 0;
  }
  .submit {
    border: 1px solid ${colors.black2};
    border-radius: ${sizes.size50};
    background-color: transparent;
    text-transform: uppercase;
    padding: ${sizes.size16} ${sizes.size64};
    cursor: pointer;
    ${mqSimple({
      width: ["100%", "auto"],
    })}
    &:hover {
      border: 1px solid ${colors.grey};
    }
  }
`;

const CredRow = styled.div`
  gap: ${sizes.size36};
  display: flex;
  ${mqSimple({
    flexDirection: ["column", "row"],
  })}
`;
const MessageRow = styled(CredRow)`
  margin: ${sizes.size36} 0;
`;
const CredCol = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${colors.black};
  text-transform: uppercase;
  ${mqSimple({
    maxWidth: ["100%", `${sizes.size300}`],
  })}
`;
const FormHeading = styled.h3`
  position: relative;
  line-height: 1.5;
  color: ${colors.black2};
  ${mqSimple({
    fontSize: [`${sizes.size26}`, `${sizes.size48}`],
    width: ["auto", `calc(${sizes.size300} + 5px)`],
    minWidth: ["auto", `calc(${sizes.size300} + 5px)`],
  })}
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;
  margin: 0;
`;
