package files;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;

import org.w3c.dom.Document;
import org.xml.sax.SAXException;

/**
 * Transfer thousands of xml files to one csv file  (not finished)
 * @author yingnuoqi
 *
 */
public class TransferXmltoCSV {
	
	public static String xmlfolderPath = "/Users/yingnuoqi/Documents/2IS/Courses/Term Project/eRisk/train/negative_examples_anonymous_chunks/chunk 1";
	
	public void transfer () {
		File file = new File(xmlfolderPath);
		File[] xmlFileList = file.listFiles();
		
		DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
		DocumentBuilder builder;
		try {
			builder = factory.newDocumentBuilder();
			for (File xmlFile : xmlFileList) {
				Document document = builder.parse(xmlFile);
				//Transformer transformer = TransformerFactory.newInstance().newTransformer(xmlFile);

			}
			
			
		} catch (ParserConfigurationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SAXException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
	}
	
//	public static void main(String[] args) {
//		String folderPath = "/Users/yingnuoqi/Documents/2IS/Courses/Term Project/eRisk/train/negative_examples_anonymous_chunks/chunk 1";
//
//		TransferXmltoCSV transferXmltoCSV = new TransferXmltoCSV();
//		transferXmltoCSV.getFiles(folderPath);
//		
//	}
}
