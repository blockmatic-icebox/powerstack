import { defaultGetServerSideProps, DefaultSsrPage } from '~/app-server/session-ssr'
import * as Tabs from '@radix-ui/react-tabs'
import Image from 'next/image'
import { styled } from '~/app-view/styles/stitches.config'
import { Link } from '~/app-view/components/base/Link'
import { Input } from '~/app-view/components/base/Input'
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export const getServerSideProps = defaultGetServerSideProps

const ProfileBadgeImage = styled('div', {
  size: 100,
  position: 'relative'
})

const InputGroup = styled('div', {
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  mb: '$regular',
  position: 'relative',
  '@small': {
    mb: '$large',
  }
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
  fontSize: 14,
  left: 24,
  m: 0,
  p: 0,
})

const FormTextarea = styled('textarea', {
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

const ProfileTabs = styled(Tabs.List, {
  borderBottom: '1px solid #E7E9ED',
  '& button': {
    bg: 'transparent',
    border: 'none',
    borderBottom: '2px solid transparent',
    cursor: 'pointer',
    fontSize: 16,
    px: '$small',
    pb: '$small',
    transition: 'border 400ms',
    '&[data-state="active"]': {
      borderBottomColor: '$044-bff',
      color: '$044-bff',
      fontWeight: 700,
    }
  }
})

const FormStatusMessage = styled('p', { color: '$error' })

const Title = styled('h2', {
  fontSize: 24,
  mb: '$large',
  mt: 0,
})

const TabContent = styled(Tabs.Content, {
  py: '$large'
})

const Badge = styled('div', {
  alignItems: 'center',
  display: 'flex',

})

const FormSchema = z.object({
  username: z.string({ required_error: "This field is required", }).min(1, { message: "Username can't be empty" }),
  email: z
    .string({ required_error: "This field is required", })
    .email({ message: "Invalid email" })
    .min(1, { message: "Email or username can't be empty" }),
  bio: z.string({ required_error: "This field is required", }),
})
type FormSchemaType = z.infer<typeof FormSchema>;

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
      <ProfileTabs aria-label="Profile Tabs">
        <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
        <Tabs.Trigger value="notifications">Notifications</Tabs.Trigger>
        <Tabs.Trigger value="security">Security</Tabs.Trigger>
      </ProfileTabs>
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
        <h3>Account Details</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <FormLabel htmlFor="username">User Name</FormLabel>
            <FormInput
              id="username"
              type="text"
              {...register("username")}
            />
            {errors.username && <FormStatusMessage>{errors.username.message}</FormStatusMessage>}
          </InputGroup>
          <InputGroup>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              id="email"
              type="email"
              {...register("email")}
            />
            {errors.email && <FormStatusMessage>{errors.email.message}</FormStatusMessage>}
          </InputGroup>
          <InputGroup>
            <FormLabel htmlFor="bio">Bio</FormLabel>
            <FormInput
              id="bio"
              {...register("bio")}
            />
            {errors.bio && <FormStatusMessage>{errors.bio.message}</FormStatusMessage>}
          </InputGroup>
          <button
            type="button"
            disabled={isSubmitting}
          >
            Save Changes
          </button>
        </form>
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
