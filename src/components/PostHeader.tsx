import Avatar from './Avatar'
import ContentfulImage from './Contentfulinage'


const PostHeader = ({ post }:any) => {
  const { title, coverImage, author, date } = post.fields

  return (
    <>
      <h2>{title}</h2>
      <div className='hidden md:flex md:justify-between md:items-center md:mb-10'>
        <Avatar name={author.fields.name} picture={author.fields.picture} />
      </div>
      <div className='mb-8 md:mb-16 sm:mx-0'>
        <ContentfulImage
          alt={`Cover Image for ${title}`}
          src={coverImage.fields.file.url}
          width={coverImage.fields.file.details.image.width}
          height={coverImage.fields.file.details.image.height}
        />
      </div>
      <div className='flex justify-between items-center md:hidden mb-6'>
        <Avatar name={author.fields.name} picture={author.fields.picture} />
      </div>
    </>
  )
}

export default PostHeader