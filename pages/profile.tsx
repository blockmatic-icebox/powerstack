import { defaultGetServerSideProps, DefaultSsrPage } from '~/server/session-ssr'
import * as Tabs from '@radix-ui/react-tabs'
import Image from 'next/image'
import { styled } from '~/ui/_legacy/styles/stitches.config'
import { Link } from '~/ui/_legacy/components/base/Link'
import { Input } from '~/ui/_legacy/components/base/Input'
import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TabOptions } from '~/ui/_legacy/components/layout/Tab'

export const getServerSideProps = defaultGetServerSideProps

const ProfileBadgeImage = styled('div', {
  size: 100,
  position: 'relative',
})

const InputGroup = styled('div', {
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  mb: '$regular',
  position: 'relative',
  '@small': {
    mb: '$large',
  },
})

const FormInput = styled(Input, {
  backgroundColor: 'transparent',
  border: '1px solid $neutral-100',
  display: 'block',
  fontSize: 16,
  fontWeight: 600,
  p: '$x-small $regular',
  width: '100%',
  '&:hover, &:focus': {
    outline: 'none',
  },
})

const FormLabel = styled('label', {
  color: '#404467',
  fontSize: 14,
  mb: '$x-small',
  mt: 0,
  p: 0,
})

const FormTextarea = styled('textarea', {
  backgroundColor: 'transparent',
  border: '1px solid $neutral-100',
  display: 'block',
  fontSize: 16,
  fontWeight: 600,
  p: '$x-small $regular',
  minHeight: 140,
  width: '100%',
  '&:hover, &:focus': {
    outline: 'none',
  },
})

const FormStatusMessage = styled('p', { color: '$error' })

const Title = styled('h2', {
  fontSize: 24,
  mb: '$large',
  mt: 0,
})

const TabContent = styled(Tabs.Content, {
  py: '$large',
})

const Badge = styled('div', {
  alignItems: 'center',
  display: 'flex',
  columnGap: '$small',
  mb: '$large',
  '& h3': {
    mb: '$xxx-small',
    mt: 0,
  },
  '& p': {
    mb: '$xxx-small',
    mt: 0,
  },
  '& a': {
    color: '$primary-blue',
    mt: 0,
  },
})

const FormTitle = styled('h3', {
  borderBottom: '1px solid #E7E9ED',
  fontSize: 24,
  fontWeight: 600,
  pb: '$regular',
  mb: '$regular',
})

const StyledForm = styled('form', {
  maxWidth: 465,
})

const SaveButton = styled('button', {
  bg: '$primary-blue',
  border: 'none',
  borderRadius: '$radius-14',
  color: 'white',
  cursor: 'pointer',
  fontSize: 16,
  fontWeight: 600,
  p: '$small $regular',
})

const FormSchema = z.object({
  username: z
    .string({ required_error: 'This field is required' })
    .min(1, { message: "Username can't be empty" }),
  email: z
    .string({ required_error: 'This field is required' })
    .email({ message: 'Invalid email' })
    .min(1, { message: "Email or username can't be empty" }),
  bio: z.string({ required_error: 'This field is required' }),
})

const Tab = styled(Tabs.Trigger, {
  px: '$small',
  pb: '$small',
  fontWeight: 700,
})

type FormSchemaType = z.infer<typeof FormSchema>

const Profle: DefaultSsrPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  })

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    console.log('Form Data', data)
  }

  return (
    <Tabs.Root defaultValue="profile" orientation="vertical">
      <Title>Profile Configuration</Title>
      <TabOptions aria-label="Profile Tabs" css={{ borderBottom: '1px solid #E7E9ED' }}>
        <Tab value="profile">Profile</Tab>
        <Tab value="notifications">Notifications</Tab>
        <Tab value="security">Security</Tab>
      </TabOptions>
      <TabContent value="profile">
        {/* profile badge */}
        <Badge>
          <ProfileBadgeImage>
            <Image
              src="/logo-icon.png"
              alt="Profile Badge Image"
              layout="fill"
              objectFit="contain"
            />
          </ProfileBadgeImage>
          <div>
            <h3>@M4st3rmiau</h3>
            <p>Select one of your NFTs as your profile picture</p>
            <Link href="#">Change profile NFT</Link>
          </div>
        </Badge>
        <FormTitle>Account Details</FormTitle>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <FormLabel htmlFor="username">User Name</FormLabel>
            <FormInput id="username" type="text" {...register('username')} />
            {errors.username && <FormStatusMessage>{errors.username.message}</FormStatusMessage>}
          </InputGroup>
          <InputGroup>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput id="email" type="email" {...register('email')} />
            {errors.email && <FormStatusMessage>{errors.email.message}</FormStatusMessage>}
          </InputGroup>
          <InputGroup>
            <FormLabel htmlFor="bio">Bio</FormLabel>
            <FormTextarea id="bio" {...register('bio')} />
            {errors.bio && <FormStatusMessage>{errors.bio.message}</FormStatusMessage>}
          </InputGroup>
          <SaveButton type="submit" disabled={isSubmitting}>
            Save Changes
          </SaveButton>
        </StyledForm>
      </TabContent>
      <TabContent value="notifications">
        <h1>Notifications</h1>
      </TabContent>
      <TabContent value="security">
        <h1>Security</h1>
      </TabContent>
    </Tabs.Root>
  )
}

export default Profle
