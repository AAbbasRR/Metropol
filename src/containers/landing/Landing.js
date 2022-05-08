import react from 'react';
import classes from './styles/Landing.module.scss';

import logo from '../../assets/svg/logo.svg';
import chart from '../../assets/svg/chart.svg';
import rockCloud from '../../assets/svg/rockCloud.svg';
import oilRig from '../../assets/svg/oilRig.svg';
import sea from '../../assets/svg/sea.svg';
import petroleum from '../../assets/svg/petroleum.svg';
import oil_gas from '../../assets/svg/oil_gas.svg';
import structures from '../../assets/svg/structures.svg';
import footerOil from '../../assets/svg/footerOil.svg';

import video from '../../assets/images/video.png';

import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const Landing = () => {

    return (
        <div className={classes.main}>
            <div className={classes.indexImage}>
                <div className={classes.secenderyItem}>
                    <div className={classes.indexLogoImage}>
                        <img src={logo} alt="metropol logo" />
                    </div>
                </div>
                <div className={classes.indexFooter}>
                    <div className={`text-white ${classes.menu}`}>
                        <span>Metropol Intruduction</span>
                        <i></i>
                        <span>Our Mission & Vision</span>
                        <i></i>
                        <span>Activities</span>
                        <i></i>
                        <span>Joint Ventures</span>
                    </div>
                </div>
            </div>
            <div className={classes.section}>
                <span className={`text-small ${classes.linkSection}`}>Metropol-co.com/about</span>
                <div className={classes.secendBoxContent}>
                    <div className={classes.oilLogoImage}>
                    </div>
                    <div className={classes.secendContentDiv}>
                        <div className={`text-medium ${classes.contentTextBox}`}>
                            <img src={logo} alt="metropol logo" className={classes.contentImageTitle} />
                            <p className={`paragraph-color text-line-height-normal`}>
                                Metropo Co. is committed to supply superior industrial machinery, well head equipment, Steel Plate Dished Heads, Valves, Flanges, Fittings, Pipes, Pumps, Tubes, Tube Sheets, Elbows, Gasket, Nuts and other formed products within the shortest possible time at competitive prices. We aim for great sights such as supplying quantitative and qualitative level of products, meeting customers' needs with reasonable prices and high quality. We endeavor in order of giving more services to customers in supplying the goods in their projects, also reflect customer's values, and can be assistance to customers in their petrochemical and marketing needs, or regulatory requirements.
                            </p>
                        </div>
                        <div className={classes.contentChartDiv}>
                            <img src={chart} alt="green world chart" className={classes.contentChartImage} />
                            <div className={`text-medium ${classes.chartBoxContent}`}>
                                <span className={`text-title-size text-bold ${classes.firstTitleSecentContent}`}>
                                    Metropol <span className={`text-red`}>Values</span>
                                </span>
                                <span className={`text-subtitle-size text-silver`}>
                                    Green World
                                </span>
                                <span className={`paragraph-color text-line-height-normal`}>
                                    Metropo Co. is committed to supply superior industrial machinery, well head equipment, Steel Plate Dished Heads, Valves, Flanges, Fittings, Pipes, Pumps, Tubes, Tube Sheets, Elbows, Gasket, Nuts and other formed products within the shortest possible time at competitive prices. We aim for great sights such as supplying quantitative and qualitative level of products, meeting customers' needs with reasonable prices and high quality.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.section}>
                <span className={`text-small ${classes.linkSection}`}>Metropol-co.com/ourmi</span>
                <div className={classes.thirdContentDiv}>
                    <div className={classes.thirdBoxContent}>
                        <span className={`text-title-size text-bold`}>
                            Metropol <span className={`text-red`}>Mission</span>
                        </span>
                        <span className={`text-subtitle-size text-silver`}>
                            Our Slogan Would Stand Here
                        </span>
                        <div className={classes.paragraphBox}>
                            <p className={`paragraph-color text-line-height-normal`}>
                                We, at Metropol Co., visualize to reach the zenith of perfection through speedy innovations and continous improvement in quality and processes, strategic partnerships and by providing unmatched customer services.
                            </p>
                            <p className={`paragraph-color text-line-height-normal`}>
                                We aim to become global market leader by virtue of our quality and innovative products. Our company aims to be a leader and the first choice of clients at all times. With a strong affinity for innovation, we aim to become the leader in manufacturing high-precision petrochemical equipment by incorporating all the latest technological advancements. We have started our way by aboveboard and genuine service, to be able of finding a place in the good books of our clients. We aim to provide quality services and flawless products to our customers that result their satisfactions and bulk orders from them.
                            </p>
                        </div>
                        <span className={`text-medium text-readmore text-bold`}>
                            Read More ...
                        </span>
                    </div>
                    <div className={classes.thirdBoxContent}>
                        <span className={`text-title-size text-bold`}>
                            Metropol <span className={`text-red`}>Vission</span>
                        </span>
                        <span className={`text-subtitle-size text-silver`}>
                            Our Slogan Would Stand Here
                        </span>
                        <div className={classes.paragraphBox}>
                            <p className={`paragraph-color text-line-height-normal`}>
                                Our organization is customer oriented and we adhere to our commitment that is Friendly customer service, along with competitive pricing and on time delivery, to meet needs of our customers to their utmost satisfaction and continue to serve them with reliable and high quality products. Continually improving upon the quality of our products & services, we endeavor to create value for our customers.
                            </p>
                        </div>
                        <span className={`text-medium text-readmore text-bold`}>
                            Read More ...
                        </span>
                    </div>
                </div>
            </div>
            <div className={`${classes.section} ${classes.frontSection}`}>
                <span className={`text-small text-white ${classes.linkSection} ${classes.frontSection}`}>Metropol-co.com/news</span>
                <div className={classes.imagesOil}>
                    <div className={classes.rockCloudImage}>
                        <img src={rockCloud} alt="rock cloud" />
                    </div>
                    <img src={oilRig} alt="oil rig" className={classes.oilRigImage} />
                    <div className={classes.seaImage}>
                        <img src={sea} alt="sea" />
                    </div>
                    <div className={classes.oilRigImageGradient} />
                    <div className={classes.contentBox}>
                        <span className={`text-bigTitle-size text-bold text-white`}>
                            Deep in Oil & Gas
                        </span>
                        <span className={`text-subtitle-size text-silver`}>
                            Our Slogan Would Stand Here
                        </span>
                        <div className={classes.paragraphBox}>
                            <p className={`paragraph-color text-line-height-normal`}>
                                Our organization is customer oriented and we adhere to our commitment that is Friendly customer service, along with competitive pricing and on time delivery, to meet needs of our customers to their utmost satisfaction and continue to serve them with reliable and high quality products. Continually improving upon the quality of our products & services, we endeavor to create value for our customers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.section}>
                <span className={`text-small ${classes.linkSection}`}>Metropol-co.com/activities</span>
                <div className={classes.fourthContent}>
                    <div className={classes.fourthContentDiv}>
                        <div className={classes.fourthContentDivTitle}>
                            <img src={logo} alt="metropol logo" className={classes.fourthContentDivImageTitle} />
                            <span className={`text-subtitle-size text-readmore`}>
                                Activities
                            </span>
                        </div>
                        <p className={`paragraph-color`}>
                            Metropo Co. is committed to supply superior industrial machinery, well head equipment, Steel Plate Dished Heads, Valves, Flanges, Fittings, Pipes, Pumps, Tubes, Tube Sheets, Elbows, Gasket, Nuts and other formed products within the shortest possible time at competitive prices.
                        </p>
                    </div>
                    <Grid container justify="center" direction="row" spacing={10} className={classes.oilRigImagesBox}>
                        <Grid item xl={4} lg={4} md={4} sm={12} xs={12} className={classes.dividerSeprator}>
                            <div className={classes.gridItem}>
                                <img src={petroleum} alt="petroleum image" className={classes.rigImage} />
                                <span className={`text-title-size text-center`}>
                                    petroleum
                                </span>
                                <p className={`paragraph-color`}>
                                    Metropo Co. is committed to supply superior industrial machinery, well head equipment, Steel Plate Dished Heads, Valves, Flanges, Fittings, Pipes, Pumps, Tubes, Tube Sheets, Elbows, Gasket, Nuts and other formed products within the shortest possible time at competitive prices.
                                </p>
                                <span className={`text-medium text-readmore text-bold`}>
                                    Read More ...
                                </span>
                            </div>
                        </Grid>
                        <Grid item xl={4} lg={4} md={4} sm={12} xs={12} className={classes.dividerSeprator}>
                            <div className={classes.gridItem}>
                                <img src={oil_gas} alt="oil_gas image" className={classes.rigImage} />
                                <span className={`text-title-size text-center`}>
                                    oil & gas
                                </span>
                                <p className={`paragraph-color`}>
                                    Metropo Co. is committed to supply superior industrial machinery, well head equipment, Steel Plate Dished Heads, Valves, Flanges, Fittings, Pipes, Pumps, Tubes, Tube Sheets, Elbows, Gasket, Nuts and other formed products within the shortest possible time at competitive prices.
                                </p>
                                <span className={`text-medium text-readmore text-bold`}>
                                    Read More ...
                                </span>
                            </div>
                        </Grid>
                        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                            <div className={classes.gridItem}>
                                <img src={structures} alt="structures image" className={classes.rigImage} />
                                <span className={`text-title-size text-center`}>
                                    structures
                                </span>
                                <p className={`paragraph-color`}>
                                    Metropo Co. is committed to supply superior industrial machinery, well head equipment, Steel Plate Dished Heads, Valves, Flanges, Fittings, Pipes, Pumps, Tubes, Tube Sheets, Elbows, Gasket, Nuts and other formed products within the shortest possible time at competitive prices.
                                </p>
                                <span className={`text-medium text-readmore text-bold`}>
                                    Read More ...
                                </span>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className={`${classes.section} ${classes.fifthBackgroundImage}`}>
                <span className={`text-small text-white ${classes.linkSection}`}>Metropol-co.com/jointventures</span>
                <div className={classes.fifthContent}>
                    <span className={`text-white text-title-size text-bold`}>Joint Ventures</span>
                    <span className={`text-white text-bigTitle-size text-bold`}>Our Partners are value</span>
                    <p className={`paragraph-color`}>
                        Metropo Co. is committed to supply superior industrial machinery, well head equipment, Steel Plate Dished Heads, Valves, Flanges, Fittings, Pipes, Pumps, Tubes, Tube Sheets, Elbows, Gasket, Nuts and other formed products within the shortest possible time at competitive prices.
                    </p>
                </div>
            </div>
            <div className={classes.section}>
                <span className={`text-small ${classes.linkSection}`}>Metropol-co.com/reprt</span>
                <div className={classes.sixthContent}>
                    <span className={`text-silver text-ultraBigTitle-size`}>How it Works</span>
                    <span className={`text-subtitle-size`}>from beginning to the end ...</span>
                    <div className={classes.sixthContentDiv}>
                        <img src={video} alt="metropol video" className={classes.sixthContentVideo} />
                        <div className={classes.sixthContentDescription}>
                            <p className={`paragraph-color`}>
                                Metropo Co. is committed to supply superior industrial machinery, well head equipment, Steel Plate Dished Heads, Valves, Flanges, Fittings, Pipes, Pumps, Tubes, Tube Sheets, Elbows, Gasket, Nuts and other formed products within the shortest possible time at competitive prices.
                            </p>
                            <span className={`text-medium text-readmore text-bold`}>
                                Read More ...
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.footerSection}>
                <div className={classes.footerLogoDiv}>
                    <img src={logo} alt={"logo image"} className={classes.footerLogoImage} />
                </div>
                <footer className={classes.footerContent}>
                    <div className={classes.footerContentDiv}>
                        <p className={`${classes.aboutUs}`}>
                            <span>"</span>
                            Metropol cares about
                            world being, we do care
                            what nature needs to
                            be qontiued ...
                        </p>
                        <div className={`text-medium ${classes.aboutSite}`}>
                            <div className={`${classes.connectUs} ${classes.aboutSiteItem}`}>
                                <span>connect with us</span>
                                <FacebookIcon fontSize={"large"}/>
                                <InstagramIcon fontSize={"large"}/>
                                <TwitterIcon fontSize={"large"}/>
                                <LinkedInIcon fontSize={"large"}/>
                            </div>
                            <div className={`${classes.menu} ${classes.aboutSiteItem}`}>
                                <span>Metropol Intruduction</span>
                                <i></i>
                                <span>Our Mission & Vision</span>
                                <i></i>
                                <span>Activities</span>
                                <i></i>
                                <span>Joint Ventures</span>
                            </div>
                            <div className={`text-silver ${classes.copyRight} ${classes.aboutSiteItem}`}>
                                <span>
                                    © 2021 Metropol Corporation. All rights reserved.
                                </span>
                                <div className={classes.copyRightItem}>
                                    <span className={classes.itemBorder}>site map</span>
                                    <span className={classes.itemBorder}>accessibility</span>
                                    <span className={classes.itemBorder}>terms of use</span>
                                    <span>privacy</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.oilFooterImage}>
                        <img src={footerOil} alt={"footer oil image"} />
                    </div>
                </footer>
            </div>
        </div >
    );
};

export default Landing