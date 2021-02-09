import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup';
import { Button, FormGroup, Input, Label } from 'reactstrap';

export const AddBootcampComponent1 = () => {

    const validationSchema = yup.object().shape({
        title: yup.string().required().min(2),
        imageUrl: yup.string().required().min(5),
        details: yup.string().required()
    });

    const { handleSubmit, errors, control } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(validationSchema)
    })

    const onCustomSubmit = (data: any) => {
        console.log('data', data);
    }

    return (
        <div className="add-form">
            <form onSubmit={handleSubmit(onCustomSubmit)}>
                <FormGroup>
                    <Label for="title">Title:</Label>
                    {errors.title && <div className="text-danger error-message">{errors.title.message}</div>}
                    <Controller
                        as={Input}
                        name="title"
                        control={control}
                        defaultValue=""
                    >
                    </Controller>
                </FormGroup>

                <FormGroup>
                    <Label for="imageUrl">Image url:</Label>
                    {errors.imageUrl && <div className="text-danger error-message">{errors.imageUrl.message}</div>}
                    <Controller
                        as={Input}
                        name="imageUrl"
                        control={control}
                        defaultValue=""
                    >
                    </Controller>
                </FormGroup>

                <FormGroup>
                    <Label for="details">Details:</Label>
                    {errors.details && <div className="text-danger error-message">{errors.details.message}</div>}
                    <Controller
                        name="details"
                        control={control}
                        defaultValue=""
                        render={(props) => (
                            <textarea className="form-control details-textarea"
                                onChange={(e) => props.onChange(e.target.value)}
                            >
                            </textarea>
                        )}
                    >
                    </Controller>
                </FormGroup>

                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}
