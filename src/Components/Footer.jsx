import React from 'react'

const Footer = () => {
	return (
		<section className="footer">
			<div className="container row outer">
				<div className="col-3 social_media">
					<a href="#" target="_blank" rel="nofollow">
						<div className="social_icon google" />
					</a>
					<a href="#" target="_blank" rel="nofollow">
						<div className="social_icon facebook" />
					</a>
					<a href="#" target="_blank" rel="nofollow">
						<div className="social_icon twitter" />
					</a>
					<a href="#" target="_blank" rel="nofollow">
						<div className="social_icon pinterest" />
					</a>
				</div>
				<div className="col-5 title">Kreator Zmyślonych Cytatów</div>
				<div className="col-4 author">
					<p>
						<a
							href="https://github.com/HGZdev"
							target="_blank"
							rel="noopener noreferrer"
						>
							HGZ&nbsp;webdesign
						</a>
						&nbsp;&copy;&nbsp;{new Date().getFullYear()}
					</p>
				</div>
			</div>
		</section>
	)
}

export default Footer
