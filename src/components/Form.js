import React from 'react';

export default class CCEDLiveWebinarForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
      }

      handleTextChange(e) {
        this.props.onTextChange(e.target.value, e.target.name);
      }

      render(){

        let testingHtml = `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
        <html>
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
          <meta http-equiv="Content-Style-Type" content="text/css">
          <title></title>
          <meta name="Generator" content="Cocoa HTML Writer">
          <meta name="CocoaVersion" content="1404.47">
          <style type="text/css">
            p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; text-align: justify; line-height: 12.0px; font: 9.0px 'Chronicle Deck'}
            p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; text-align: justify; text-indent: 9.0px; line-height: 12.0px; font: 9.0px 'Chronicle Deck'}
            p.p3 {margin: 0.0px 0.0px 0.0px 0.0px; text-align: justify; text-indent: 9.0px; line-height: 12.0px; font: 9.0px 'Chronicle Deck'; min-height: 11.0px}
            p.p4 {margin: 0.0px 0.0px 0.0px 0.0px; line-height: 12.0px; font: 8.0px 'Chronicle Deck'}
            span.s1 {font: 8.5px 'Klinic Slab'}
            span.s2 {font-kerning: none}
          </style>
        </head>
        <body>
        <p class="p1"><span class="s1"><b>Dentistry is changing</b></span> exponentially, largely as a result of new technologies. There seems to be no part of dentistry unaffected. CAD/CAM systems have made their mark in all specialties of dental technology. Some specialties, such as crown and bridge, have witnessed a widespread, complete integration of CAD/CAM, while others such as complete dentures have only recently been digitized and are not integrated into dentists’ and/or dental laboratory processes quite yet. CAD/CAM integration within the fixed specialty is undeniable. Cost, time, and labor have been reduced for all dental professionals through the use of CAD/CAM systems. More importantly, it has granted the profession the ability to perform more efficiently and fabricate overall superior restorations with minimal human error.<span class="Apple-converted-space"> </span></p>
        <p class="p2"><span class="s2">With so many specialties experiencing the significant benefits of CAD/CAM technology, some dental professionals may wonder, “Why the delay of widespread acceptance into the complete denture market?” With the denture market projected to be $3.6 billion by 2019, it is puzzling why so few professionals have transitioned to digital dentures compared to the rapid adoption for digital fixed restorations. The answer to this question could bring multiple answers. It may be due to resistance to change, misunderstanding of the technology, or even the perception of lower quality compared to traditional complete dentures. Regardless of the perspective, we can all agree that digital dentistry is growing rapidly in all specialties, and digital dentures progress everyday.<span class="Apple-converted-space"> </span></span></p>
        <p class="p2">Currently there are many different options available for digital complete denture fabrication. However, the main selling points of digital dentures remain the same regardless of the process or technology manufacturer. These selling points are the reduction of chairtime and labor and the ability to reproduce a denture quickly using digital records. Almost all digital denture options emphasize an estimated three-appointment procedure, in comparison to analog denture fabrication methods that require an estimated five appointments. Most companies make this possible by combining the preliminary impression, custom tray impression, and occlusal rim appointments into one using unique impression systems (Figure 1). Dental technicians know very well how often complete dentures are lost or broken beyond repair, or how much time/money a remake can take from a laboratory. The ability to remake a complete prosthetic in a couple of days, or even in a matter of hours, with little or no labor, is a significant advantage within the digital denture market.<span class="Apple-converted-space"> </span></p>
        <p class="p2"><span class="s2">Some of the most familiar companies that have offered the ability to fabricate digital dentures are Amann Girrbach, AvaDent, DENTCA, Dentsply Sirona, Ivoclar Vivadent, and Kulzer. The variety of options and methodologies available for digital fabrication of complete dentures can be somewhat confusing to newcomers. Here is a breakdown of some of the options available in this industry.<span class="Apple-converted-space"> </span></span></p>
        <p class="p2">AvaDent, DENTCA, and Kulzer offer partnerships with laboratories in order to service dental practices. By doing so, dental laboratories are utilized as the third party between these companies and the dental clinicians. These companies have been known to charge laboratories a single fee for the partnership, in which the laboratories are responsible for scanning the case, acting as the hub for quality control, and receiving and delivering try-ins/finals. These companies take the responsibility of designing and fabricating the final removable prosthetic with some different options. The impression systems used among these companies are similar with only slight variations. In general, the impression systems allow a clinician to obtain a final impression, proper vertical dimension, and centric position in one patient visit. AvaDent and Kulzer also offer a more traditional method of record acquisition through impressions within the base plate of occlusal rims. However, AvaDent also markets two other impression options not offered by competing companies (Figure 2).</p>
        <p class="p2">All three systems mentioned above make 3-dimensionally printed try-in prosthetics. Kulzer now offers a wax try-in, which is a 3D-printed denture base with denture teeth set in wax. This gives the clinician or technician the capacity to make necessary changes to the try-in without having to communicate them back to Kulzer. This type of try-in aids in the elimination of Kulzer having to send another 3D-printed try-in since the teeth are repositionable, unlike a completely 3D-printed try-in. AvaDent offers something similar with a 3D-printed PMMA try-in available in different tooth shades, as well as a milled option with repositionable denture teeth set in wax. All design and manufacturing aspects are offered by these companies in their entirety; however, some do offer dental laboratories the ability to process the final prosthetic. The main difference among AvaDent, DENTCA, and Kulzer processes is their final prosthetic fabrication method. AvaDent offers the option of a fully milled monolithic denture base and teeth from a single puck, while still offering a milled denture base in which teeth can be bonded after denture base fabrication. DENTCA is known for being the first company to obtain FDA approval for a 3D-printed final denture base in 2015. The teeth are also printed and bonded to the base post-production. According to DENTCA, the properties of their material have passed the FDA requirements and are similar to conventional denture bases and acrylic teeth. Their material is similar to PMMA, but allows for the convenience of curing through UV light instead of with controlled heating (Figure 3). Kulzer makes use of their proprietary systems to fabricate their digital dentures, while they also allow the dental laboratory to fabricate the final removable prosthetic.</p>
        <p class="p2"><span class="s2">Amman Girrbach and Ivoclar Vivadent stand out in the digital denture market because they allow users the ability to fabricate their own final dentures. Amman Girrbach makes use of traditional impression and vertical/centric records, scanning in articulated models within a laboratory scanner, which then allows the user to design the set-up in house. Ivoclar Vivadent offers both the traditional method of acquiring impressions and records, as well as similar techniques used by other companies previously discussed. Full control over design is also an option from Ivoclar Vivadent. Amann Girrbach has the capability of producing milled wax denture bases and basal adaptations of denture teeth within the mill to be easily attached to the wax denture base for try-in (Figure 4). Ivoclar Vivadent offers a fully milled try-in made from their propriety PMMA discs. The biggest difference between these competitors’ methods comes in the fabrication of the final removable prosthetic. Amann Girrbach’s digital process stops at the try-in phase and permits the user to utilize any fabrication method, including pouring, press packing, and even injection. Later this year, Amann Girrbach will introduce the Merz final milled denture system to its output capabilities. Ivoclar Vivadent makes use of their popular IvoBase® product by creating a puck from which the denture base can be milled (Figure 5). The teeth are also milled from a propriety tooth shade puck. A transfer is milled from PMMA material in order to aid in the positioning of the milled teeth in to the milled denture base.<span class="Apple-converted-space"> </span></span></p>
        <p class="p2"><span class="s2">These companies were some of the first to bring the digital denture option to fruition. They have spent years working on their systems, developing more ways to perfect the concept of digital dentures. However, with progression in this industry comes competition. More companies are stepping up to the plate to contribute to the digital denture market. Some of the more recent companies that have contributed are Dentsply Sirona and Merz Dental.</span></p>
        <p class="p2">Last August, Dentsply Sirona announced collaboration with Avadent in the digital denture market. Today their collaboration has brought forth a new digital denture option. For the dental laboratory, it offers the option to scan impressions and forget the rest, as well as a scan and in-house mill option. With the use of Avadent software, the company designs each case, allowing a dental laboratory to mill both try-ins and the final removable prosthetic. The final prosthetic is fabricated from Denstply Sirona’s proprietary acrylic bases Lucitone 199® and Lucitone HIPA®, while also making use of their popular brand of denture teeth Portrait IPN®. The denture base and teeth are fabricated separately and are bonded together post denture base fabrication.<span class="Apple-converted-space"> </span></p>
        <p class="p2"><span class="s2">Merz Dental’s Baltic Denture System® provides users with a method for taking impressions and fabricating dentures that stands apart from what other companies currently offer. They divide the system into three stages: BD Key Set®, BD Creator®, and BD Load®. The BD Key Set is their impression system, which includes prefabricated denture arches to gain visual perspective of midline, occlusal plane, and jaw relation. These prefabricated small, medium, and large denture arches also serve as an impression tray which allow the clinician to acquire all the information needed to fabricate the final denture, without the need for a try-in appointment (Figure 6). BD Creator is the software system that aids in the design of the case. BD Load is the final stage, when the final denture is milled from a puck that has been fabricated with premium denture teeth already bonded to the puck in occlusion, in a variety of sizes to fit wide, narrow, and standard alveolar ridge anatomical structures (Figure 7). Minimal manual finishing and polishing are required upon completion of milling.</span></p>
        <p class="p2"><span class="s2">The benefits of digital dentures have already been discussed. However, one often overlooked benefit is the marketability of digital dentures to patients. It is not uncommon for dental laboratories and clinicians to up-charge for a digital denture even though cost and labor have been reduced. Society has entered an age where many people look to purchase the “latest and greatest.” Are digital dentures the latest? Yes. Are they the greatest? Many dental professionals would put that up for debate. There is one common technological factor that all digital denture companies lack, and that is making use of digital impressions rather than traditional analog techniques. This is because an intraoral impression wand does not provide the compression data obtained when using conventional tray and impression techniques. Although this pitfall will most likely be addressed in the coming years, getting incomplete information from digital impressions continues to be a constant topic of discussion.<span class="Apple-converted-space"> </span></span></p>
        <p class="p2"><span class="s2">Regardless of perspective, digital dentures are a feasible option being utilized successfully around the world. Their technological progression will only continue to advance. In late October, <i>IDT</i> will hold a Digital Denture Symposium in Baltimore, Maryland. There is no doubt that new announcements and innovations will be shared at this meeting, further pushing the advancement of digital dentures.<span class="Apple-converted-space"> </span></span></p>
        <p class="p3"><br></p>
        <p class="p4"><b><i>Reference</i></b></p>
        <p class="p4">1. Johnson P. Rapid growth for denture market. <i>Inside Dental Technology Special Issues</i>. 2015;6(1):1. https://www.dentalaegis.com/special-issues/2015/04/rapid-growth-for-denture-market. Accessed August 6, 2017.</p>
        </body>
        </html>
        `
          return (
            <div id="main-form">
            <h3> Aegis Content Formatter</h3>
            <div className="label">
              {/* The name attribute should match the state.selected_template property */}
            </div>
            <div className="label">
              Title: <br />
              <input
                type="text"
                name="title"
                value={this.props.info.title}
                onChange={this.handleTextChange}
              />
            </div>

            <div className="label">
              Deck: &nbsp;
              <input
                type="text"
                name="deck"
                value={this.props.info.deck}
                onChange={this.handleTextChange}
              />
            </div>
            <div className="label">
              Author: &nbsp;
              <input
                type="text"
                name="author"
                value={this.props.info.author}
                onChange={this.handleTextChange}
              />
            </div>
            <div className="label">
              Body: &nbsp;
              <textarea
                type="text"
                name="body"
                value={this.props.info.body}
                onChange={this.handleTextChange}
                className="textarea"
              />
            </div>
            Test HTML to Paste in:
            <div className="small-text">
              {testingHtml}
            </div>
          </div>
          )
      }
}


