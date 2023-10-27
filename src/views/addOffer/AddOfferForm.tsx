import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/pl';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useMutation } from 'react-query';
import styled from 'styled-components';
import * as yup from 'yup';
import { Input } from '../../components/input';
import { StyledButton } from '../../components/styledButton';
import { addOffer } from '../../services/addOffer';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const AddOfferForm = () => {
  const [validUntil, setValidUntil] = useState<string | Date | null>(null);

  const levels = [
    { id: 1, name: 'Assistant' },
    { id: 2, name: 'Junior' },
    { id: 3, name: 'Mid' },
    { id: 4, name: 'Senior' },
  ];

  const workTimes = [
    { id: 1, name: 'Full time' },
    { id: 2, name: 'Part time' },
  ];

  const types = [
    { id: 1, name: 'B2B' },
    { id: 2, name: 'Contract of employment' },
    { id: 3, name: 'Mandate contract' },
  ];

  const modes = [
    { id: 1, name: 'Remote' },
    { id: 2, name: 'Stationary' },
    { id: 3, name: 'Hybrid' },
  ];

  const AddOfferMutation = useMutation(addOffer, {
    onSuccess: (res: any) => {
      console.log('success', res);
    },
  });

  const validation = yup.object({
    title: yup.string().required('Title is required'),
    description: yup.string().required('Description is required'),
    requirements: yup.string().required('Requirements is required'),
    responsibilities: yup.string().required('Responsibilities is required'),
    // validUntil: yup.string().required('Valid until is required'),
    whatWeOffer: yup.string().required('What we offer is required'),
    company: yup.object({
      name: yup.string().required('Company name is required'),
      city: yup.string().required('Company city is required'),
      description: yup.string().required('Company description is required'),
    }),
    contract: yup.object({
      mode: yup.string().required('Contract mode is required'),
      salary: yup.object({
        from: yup.number().required('Salary from is required'),
        to: yup.number().required('Salary to is required'),
      }),
    }),
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      requirements: '',
      responsibilities: '',
      whatWeOffer: '',
      comapnyCity: '',
      companyDescription: '',
      companyName: '',
      mode: '',
      salary: {
        from: 0,
        to: 0,
      },
      type: '',
      workTime: '',
      level: '',
    },
    validationSchema: validation,
    onSubmit: (values) => {
      const body = {
        title: values.title,
        description: values.description,
        requirements: values.requirements,
        responsibilities: values.responsibilities,
        validUntil: validUntil,
        whatWeOffer: values.whatWeOffer,
        comapnyCity: values.comapnyCity,
        companyDescription: values.companyDescription,
        companyName: values.companyName,
        mode: values.mode,
        salary: {
          from: values.salary.from,
          to: values.salary.to,
        },
        type: values.type,
        workTime: values.workTime,
        level: values.level,
      };
      console.log(body);
      // AddOfferMutation.mutate(body);
    },
  });

  return (
    <LocalizationProvider adapterLocale="pl" dateAdapter={AdapterDayjs}>
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
            <DatePicker
              value={validUntil}
              onChange={(newValue) => setValidUntil(newValue)}
              label={'Valid until'}
              disablePast
            />
            <Input
              value={formik.values.companyName}
              onChange={formik.handleChange}
              label={'Company name'}
              id={'companyName'}
              name={'companyName'}
              error={formik.touched.companyName && Boolean(formik.errors.companyName)}
              helperText={formik.touched.companyName && formik.errors.companyName}
              onBlur={formik.handleBlur}
            />
            <Input
              value={formik.values.comapnyCity}
              onChange={formik.handleChange}
              label={'Company city'}
              id={'comapnyCity'}
              name={'comapnyCity'}
              error={formik.touched.comapnyCity && Boolean(formik.errors.comapnyCity)}
              helperText={formik.touched.comapnyCity && formik.errors.comapnyCity}
              onBlur={formik.handleBlur}
            />
            <Input
              value={formik.values.companyDescription}
              onChange={formik.handleChange}
              label={'Company description'}
              id={'companyDescription'}
              name={'companyDescription'}
              error={formik.touched.companyDescription && Boolean(formik.errors.companyDescription)}
              helperText={formik.touched.companyDescription && formik.errors.companyDescription}
              onBlur={formik.handleBlur}
              multiline
              rows={4}
            />
            <Input
              value={formik.values.mode}
              onChange={formik.handleChange}
              label={'Contract mode'}
              id={'mode'}
              name={'mode'}
              error={formik.touched.mode && Boolean(formik.errors.mode)}
              helperText={formik.touched.mode && formik.errors.mode}
              onBlur={formik.handleBlur}
            />
            <Input
              value={formik.values.salary.from}
              onChange={formik.handleChange}
              label={'Salary from'}
              id={'from'}
              name={'salary.from'}
              error={formik.touched.salary?.from && Boolean(formik.errors.salary?.from)}
              helperText={formik.touched.salary?.from && formik.errors.salary?.from}
              onBlur={formik.handleBlur}
            />
            <Input
              value={formik.values.salary.to}
              onChange={formik.handleChange}
              label={'Salary to'}
              id={'to'}
              name={'salary.to'}
              error={formik.touched.salary?.to && Boolean(formik.errors.salary?.to)}
              helperText={formik.touched.salary?.to && formik.errors.salary?.to}
              onBlur={formik.handleBlur}
            />
            <Input
              value={formik.values.type}
              onChange={formik.handleChange}
              label={'Type'}
              id={'type'}
              name={'type'}
              error={formik.touched.type && Boolean(formik.errors.type)}
              helperText={formik.touched.type && formik.errors.type}
              onBlur={formik.handleBlur}
            />
            {/* <Input
              value={formik.values.workTime}
              onChange={formik.handleChange}
              label={'Work time'}
              id={'workTime'}
              name={'workTime'}
              error={formik.touched.workTime && Boolean(formik.errors.workTime)}
              helperText={formik.touched.workTime && formik.errors.workTime}
              onBlur={formik.handleBlur}
            /> */}
            <FormControl fullWidth>
              <InputLabel id="workTime-label">Work time</InputLabel>
              <Select
                placeholder="Work time"
                labelId="workTime-label"
                label="Work time"
                id="workTime"
                name="workTime"
                value={formik.values.workTime}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{ backgroundColor: 'white' }}
              >
                {workTimes.map((i: any) => (
                  <MenuItem key={i.id} value={i.name}>
                    {i.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="level-label">Level</InputLabel>
              <Select
                placeholder="Level"
                labelId="level-label"
                label="Level"
                id="level"
                name="level"
                value={formik.values.level}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{ backgroundColor: 'white' }}
              >
                {levels.map((i: any) => (
                  <MenuItem key={i.id} value={i.name}>
                    {i.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <StyledButton type="submit">Submit</StyledButton>
          </FormRoot>
        </FormContainer>
      </FormWrapper>
    </LocalizationProvider>
  );
};

export default AddOfferForm;

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
