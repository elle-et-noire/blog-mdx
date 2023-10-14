import Container from './container'

const Footer = () => {
  return (
    <footer className="bg-[#1e1d1e] border-t border-amber-900">
      <Container>
        <div className="py-10 flex flex-col lg:flex-row items-center">
          <div className='mx-auto'>© 2023 Lomega@L48610</div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
