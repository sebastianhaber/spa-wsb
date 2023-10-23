import { useFormik } from 'formik';
import { useMutation } from 'react-query';
import styled from 'styled-components';
import * as yup from 'yup';
import { Input } from '../../components/input';
import { StyledButton } from '../../components/styledButton';
import { theme } from '../../helpers/themes';
import { addOffer } from '../../services/addOffer';

const AddOfferForm = () => {
  const AddOfferMutation = useMutation(addOffer, {
    onSuccess: (res: any) => {
      console.log('success', res);
    },
  });

  const validation = yup.object({
    title: yup.string().required('Title is required'),
    description: yup.string().required('Description is required'),
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      requirements: '',
      responsibilities: '',
      validUntil: '',
      whatWeOffer: '',
      company: {
        city: '',
        description: '',
        name: '',
      },
      contract: {
        mode: '',
        salary: {
          from: 0,
          to: 0,
        },
        // type: 'contract of employment',
        // workTime: 'full-time',
        // position: {
        //   level: 'assistant',
        //   name: '???',
        // },
        // recruitmentType: 'remote',
      },
    },
    validationSchema: validation,
    onSubmit: (values) => {
      const body = {
        title: values.title,
        description: values.description,
        requirements: values.requirements,
        responsibilities: values.responsibilities,
        validUntil: values.validUntil,
        whatWeOffer: values.whatWeOffer,
        company: {
          city: values.company?.city,
          description: values.company?.description,
          name: values.company?.name,
        },
        contract: {
          mode: values.contract?.mode,
          salary: {
            from: values.contract?.salary?.from,
            to: values.contract?.salary?.to,
          },
          // type: values.contract?.type,
          // workTime: values.contract?.workTime,
          // position: {
          //   level: values.contract?.position?.level,
          //   name: values.contract?.position?.name,
          // },
          // recruitmentType: values.contract?.recruitmentType,
        },
      };

      AddOfferMutation.mutate(body);
    },
  });

  return (
    <FormWrapper>
      <FormContainer>
        <FormRoot onSubmit={formik.handleSubmit}>
          <Input
            value={formik.values.title}
            onChange={formik.handleChange}
            label={'Title'}
            id={'title'}
            name={'title'}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
            onBlur={formik.handleBlur}
          />
          <Input
            value={formik.values.description}
            onChange={formik.handleChange}
            label={'Description'}
            id={'description'}
            name={'description'}
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
            onBlur={formik.handleBlur}
          />
          <Input
            value={formik.values.requirements}
            onChange={formik.handleChange}
            label={'Requirements'}
            id={'requirements'}
            name={'requirements'}
            error={formik.touched.requirements && Boolean(formik.errors.requirements)}
            helperText={formik.touched.requirements && formik.errors.requirements}
            onBlur={formik.handleBlur}
            multiline
            rows={4}
          />
          <Input
            value={formik.values.responsibilities}
            onChange={formik.handleChange}
            label={'Responsibilities'}
            id={'responsibilities'}
            name={'responsibilities'}
            error={formik.touched.responsibilities && Boolean(formik.errors.responsibilities)}
            helperText={formik.touched.responsibilities && formik.errors.responsibilities}
            onBlur={formik.handleBlur}
            multiline
            rows={4}
          />
          <Input
            value={formik.values.validUntil}
            onChange={formik.handleChange}
            label={'Valid until'}
            id={'validUntil'}
            name={'validUntil'}
            error={formik.touched.validUntil && Boolean(formik.errors.validUntil)}
            helperText={formik.touched.validUntil && formik.errors.validUntil}
            onBlur={formik.handleBlur}
          />
          <Input
            value={formik.values.whatWeOffer}
            onChange={formik.handleChange}
            label={'What we offer'}
            id={'whatWeOffer'}
            name={'whatWeOffer'}
            error={formik.touched.whatWeOffer && Boolean(formik.errors.whatWeOffer)}
            helperText={formik.touched.whatWeOffer && formik.errors.whatWeOffer}
            onBlur={formik.handleBlur}
            multiline
            rows={4}
          />
          <Input
            value={formik.values.company?.name}
            onChange={formik.handleChange}
            label={'Company name'}
            id={'name'}
            name={'company.name'}
            error={formik.touched.company?.name && Boolean(formik.errors.company?.name)}
            helperText={formik.touched.company?.name && formik.errors.company?.name}
            onBlur={formik.handleBlur}
          />
          <Input
            value={formik.values.company?.city}
            onChange={formik.handleChange}
            label={'Company city'}
            id={'city'}
            name={'company.city'}
            error={formik.touched.company?.city && Boolean(formik.errors.company?.city)}
            helperText={formik.touched.company?.city && formik.errors.company?.city}
            onBlur={formik.handleBlur}
          />
          <Input
            value={formik.values.company?.description}
            onChange={formik.handleChange}
            label={'Company description'}
            id={'description'}
            name={'company.description'}
            error={formik.touched.company?.description && Boolean(formik.errors.company?.description)}
            helperText={formik.touched.company?.description && formik.errors.company?.description}
            onBlur={formik.handleBlur}
            multiline
            rows={4}
          />
          <Input
            value={formik.values.contract?.mode}
            onChange={formik.handleChange}
            label={'Contract mode'}
            id={'mode'}
            name={'contract.mode'}
            error={formik.touched.contract?.mode && Boolean(formik.errors.contract?.mode)}
            helperText={formik.touched.contract?.mode && formik.errors.contract?.mode}
            onBlur={formik.handleBlur}
          />
          <Input
            value={formik.values.contract?.salary?.from}
            onChange={formik.handleChange}
            label={'Salary from'}
            id={'from'}
            name={'contract.salary.from'}
            error={formik.touched.contract?.salary?.from && Boolean(formik.errors.contract?.salary?.from)}
            helperText={formik.touched.contract?.salary?.from && formik.errors.contract?.salary?.from}
            onBlur={formik.handleBlur}
          />
          <Input
            value={formik.values.contract?.salary?.to}
            onChange={formik.handleChange}
            label={'Salary to'}
            id={'to'}
            name={'contract.salary.to'}
            error={formik.touched.contract?.salary?.to && Boolean(formik.errors.contract?.salary?.to)}
            helperText={formik.touched.contract?.salary?.to && formik.errors.contract?.salary?.to}
            onBlur={formik.handleBlur}
          />
          <StyledButton type="submit">Submit</StyledButton>
        </FormRoot>
      </FormContainer>
    </FormWrapper>
  );
};

export default AddOfferForm;

const FormWrapper = styled.div`
  border-radius: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.cardBackground};
`;

const FormContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const FormRoot = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// const FormField = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
// `;
