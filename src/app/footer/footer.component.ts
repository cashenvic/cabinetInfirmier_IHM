import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

 /*
  <?xml version="1.0" encoding="UTF-8" ?>

<xsl:schema version="1.0"
           xmlns:xsl="http://www.w3.org/2001/XMLSchema"
           targetNamespace="http://www.ujf-grenoble.fr/l3miage/medical"
           xmlns:med="http://www.ujf-grenoble.fr/l3miage/medical"
           elementFormDefault="qualified"> 
    
    <xsl:element name="cabinet" type="med:Cabinet"/>
    
    <xsl:complexType name="Cabinet">
        <xsl:sequence>
            <xsl:element name="nom" type="med:Chaine" minOccurs="1" maxOccurs="1"/>
            <xsl:element name="adresse" type="med:Adresse" minOccurs="1" maxOccurs="1"/>
            <xsl:element name="infirmiers" type="med:Infirmiers" minOccurs="1" maxOccurs="1"/>
            <xsl:element name="patients" type="med:Patients" minOccurs="1" maxOccurs="1"/>
        </xsl:sequence>
    </xsl:complexType>
    
    <xsl:simpleType name="Chaine">
        <xsl:restriction base="xsl:string">
            <xsl:pattern value="[\p{L}\p{Zs}\p{S}\p{Pd}\*ç\*']+"/>
        </xsl:restriction>
    </xsl:simpleType>
    
    <!--adresse-->
    <xsl:complexType name="Adresse">
        <xsl:sequence>
            <xsl:element name="étage" type="med:IntAdresse" minOccurs="0" maxOccurs="1"/>
            <xsl:element name="numéro" type="xsl:int" minOccurs="0" maxOccurs="1"/>
            <xsl:element name="rue" type="med:Chaine" minOccurs="1" maxOccurs="1"/>
            <xsl:element name="ville" type="med:Chaine" minOccurs="1" maxOccurs="1"/>
            <xsl:element name="codePostal" type="med:CodePostale" minOccurs="1" maxOccurs="1"/>
        </xsl:sequence>
    </xsl:complexType>
    
    
    <!--on peut faire une restriction sur le numéro de l'adresse-->
    <xsl:simpleType name="IntAdresse">
        <xsl:restriction base="xsl:int">
            <xsl:maxExclusive value="60" />
            <xsl:minExclusive value="1" />
        </xsl:restriction>
    </xsl:simpleType>

    
    <xsl:simpleType name="CodePostale">
        <xsl:restriction base="xsl:int">
            <xsl:pattern value="[0-9]{5}"/>
        </xsl:restriction>
    </xsl:simpleType>
    
    
    <!--Infirmiers-->      
    <xsl:complexType name="Infirmiers">
        <xsl:sequence>
            <xsl:element name="infirmier" type="med:Infirmier" minOccurs="1" maxOccurs="unbounded"/>
        </xsl:sequence>
    </xsl:complexType>
    
    <xsl:complexType name="Infirmier">
        <xsl:sequence>
            <xsl:element name="nom" type="med:Chaine" minOccurs="1" maxOccurs="1"/>
            <xsl:element name="prénom" type="med:Chaine" minOccurs="1" maxOccurs="1"/>
            <xsl:element name="photo" type="med:Photo" minOccurs="1" maxOccurs="1"/>
        </xsl:sequence>        
        <xsl:attribute name="id" type="med:Id" use="required"/>
    </xsl:complexType>
            
     <xsl:simpleType name="Photo">
        <xsl:restriction base="xsl:string">
            <xsl:pattern value="\p{L}+\.[a-z]{3}"/>
        </xsl:restriction>
    </xsl:simpleType>
    
    
    <!--Patient-->  
    <xsl:complexType name="Patients">
        <xsl:sequence>
            <xsl:element name="patient" type="med:Patient" minOccurs="0" maxOccurs="unbounded"/>
        </xsl:sequence>
    </xsl:complexType>
    
    <xsl:complexType name="Patient">
        <xsl:sequence>
            <xsl:element name="nom" type="med:Chaine" minOccurs="1" maxOccurs="1"/>
            <xsl:element name="prénom" type="med:Chaine" minOccurs="1" maxOccurs="1"/>
            <xsl:element name="sexe" type="med:Sexe" minOccurs="1" maxOccurs="1"/>
            <xsl:element name="naissance" type="xsl:date" minOccurs="1" maxOccurs="1"/>
            <xsl:element name="numéro" type="med:Vital" minOccurs="1" maxOccurs="1"/>
            <xsl:element name="adresse" type="med:Adresse" minOccurs="1" maxOccurs="1"/>
            <xsl:element name="visite" type="med:Visite" minOccurs="1" maxOccurs="1"/>
        </xsl:sequence>
    </xsl:complexType>


    <xsl:simpleType name="Sexe">
        <xsl:restriction base="xsl:string">
            <xsl:enumeration value="F"/>
            <xsl:enumeration value="M"/>
        </xsl:restriction>
    </xsl:simpleType>
    
    <xsl:simpleType name="Vital">
        <xsl:restriction base="xsl:string">
            <xsl:pattern value="[123478]\d\d(0[1-9]|1[012])([02][1-9]|(1|[3-9])[0-9]|2B|2A)(0\d[1-9]|[1-8]\d\d|9[0-8]\d|990)(0\d[1-9]|[1-9]\d\d)([0-8]\d|9[0-7])"/>
        </xsl:restriction>
    </xsl:simpleType>   

     <xsl:complexType name="Visite">
        <xsl:sequence>
            <xsl:element name="acte" type="med:Acte" minOccurs="1" maxOccurs="unbounded"/>
        </xsl:sequence>
        <xsl:attribute name="date" type="xsl:date" use="required"/>
        <xsl:attribute name="intervenant" type="med:Id"/>
    </xsl:complexType>
    
    <xsl:complexType name="Acte">
        <xsl:attribute name="id" type="med:Id" use="required"/>
    </xsl:complexType>
    
    <xsl:simpleType name="Id">
        <xsl:restriction base="xsl:int">
            <xsl:pattern value="[0-9]{3}"/>
        </xsl:restriction>
    </xsl:simpleType>
    
           
</xsl:schema>*/