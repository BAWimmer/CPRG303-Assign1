// App.js - React Native Development Setup Guide Display
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [activeSection, setActiveSection] = useState('requirements');

  const sections = [
    { id: 'requirements', title: '1. System Requirements', icon: '💻' },
    { id: 'installation', title: '2. Installation Instructions', icon: '⚙️' },
    { id: 'configuration', title: '3. Configuration Steps', icon: '🔧' },
    { id: 'project', title: '4. Project Creation', icon: '📁' },
    { id: 'running', title: '5. Running the Project', icon: '▶️' },
    { id: 'troubleshooting', title: '6. Troubleshooting', icon: '🔍' },
    { id: 'resources', title: '7. Resources', icon: '📚' },
  ];

  const getContent = () => {
    switch (activeSection) {
      case 'requirements':
        return (
          <View>
            <Text style={styles.sectionTitle}>System Requirements</Text>
            <Text style={styles.content}>
              To develop React Native applications effectively, your system should meet the following minimum specifications:
            </Text>

            <Text style={styles.subTitle}>Hardware Requirements</Text>
            <Text style={styles.bulletPoint}>• CPU: Intel Core i5 or AMD Ryzen 5 (or equivalent) with at least 4 cores</Text>
            <Text style={styles.bulletPoint}>• RAM: Minimum 8GB RAM (16GB recommended for optimal performance)</Text>
            <Text style={styles.bulletPoint}>• Storage: At least 10GB of free disk space for development tools and dependencies</Text>
            <Text style={styles.bulletPoint}>• Graphics: Integrated graphics sufficient (dedicated GPU not required but helpful for emulator performance)</Text>

            <Text style={styles.subTitle}>Software Requirements</Text>
            <Text style={styles.bulletPoint}>• Operating System: Windows 10 (version 1903 or later) or Windows 11</Text>
            <Text style={styles.bulletPoint}>• Virtualization: CPU virtualization support enabled in BIOS</Text>
          </View>
        );

      case 'installation':
        return (
          <View>
            <Text style={styles.sectionTitle}>Installation Instructions</Text>
            <Text style={styles.content}>
              Follow these step-by-step instructions to install all necessary tools and dependencies:
            </Text>

            <Text style={styles.subTitle}>Step 2.1: Install Node.js</Text>
            <Text style={styles.bulletPoint}>1. Visit the official Node.js website: https://nodejs.org/</Text>
            <Text style={styles.bulletPoint}>2. Download the LTS version (recommended for most users)</Text>
            <Text style={styles.bulletPoint}>3. Run the installer and follow the installation wizard</Text>
            <Text style={styles.bulletPoint}>4. During installation, ensure "Add to PATH" option is checked</Text>
            <Text style={styles.bulletPoint}>5. Verify installation by opening Command Prompt and running:</Text>
            <Text style={styles.codeBlock}>node --version{'\n'}npm --version</Text>

            <Text style={styles.subTitle}>Step 2.2: Install Android Studio</Text>
            <Text style={styles.bulletPoint}>1. Download Android Studio from: https://developer.android.com/studio</Text>
            <Text style={styles.bulletPoint}>2. Run the installer and choose "Standard" installation</Text>
            <Text style={styles.bulletPoint}>3. During setup, ensure the following components are installed:</Text>
            <Text style={styles.bulletPoint}>   - Android SDK</Text>
            <Text style={styles.bulletPoint}>   - Android SDK Platform</Text>
            <Text style={styles.bulletPoint}>   - Performance (Intel HAXM)</Text>
            <Text style={styles.bulletPoint}>   - Android Virtual Device</Text>

            <Text style={styles.subTitle}>Step 2.3: Install React Native CLI</Text>
            <Text style={styles.bulletPoint}>1. Open Command Prompt as Administrator</Text>
            <Text style={styles.bulletPoint}>2. Install React Native CLI globally:</Text>
            <Text style={styles.codeBlock}>npm install -g @react-native-community/cli</Text>
            <Text style={styles.bulletPoint}>3. Verify installation:</Text>
            <Text style={styles.codeBlock}>npx react-native --version</Text>
          </View>
        );

      case 'configuration':
        return (
          <View>
            <Text style={styles.sectionTitle}>Configuration Steps</Text>

            <Text style={styles.subTitle}>Step 3.1: Configure Android SDK Environment Variables</Text>
            <Text style={styles.bulletPoint}>1. Open System Properties &gt; Advanced &gt; Environment Variables</Text>
            <Text style={styles.bulletPoint}>2. Add new system variables:</Text>
            <Text style={styles.bulletPoint}>   - Variable: ANDROID_HOME</Text>
            <Text style={styles.bulletPoint}>   - Value: C:\Users\[YourUsername]\AppData\Local\Android\Sdk</Text>
            <Text style={styles.bulletPoint}>3. Edit the PATH variable and add:</Text>
            <Text style={styles.bulletPoint}>   - %ANDROID_HOME%\platform-tools</Text>
            <Text style={styles.bulletPoint}>   - %ANDROID_HOME%\emulator</Text>
            <Text style={styles.bulletPoint}>   - %ANDROID_HOME%\tools</Text>
            <Text style={styles.bulletPoint}>   - %ANDROID_HOME%\tools\bin</Text>

            <Text style={styles.subTitle}>Step 3.2: Configure Android Studio SDK</Text>
            <Text style={styles.bulletPoint}>1. Open Android Studio</Text>
            <Text style={styles.bulletPoint}>2. Go to File &gt; Settings &gt; Appearance &amp; Behavior &gt; System Settings &gt; Android SDK</Text>
            <Text style={styles.bulletPoint}>3. In SDK Platforms tab, install:</Text>
            <Text style={styles.bulletPoint}>   - Android 13 (API Level 33)</Text>
            <Text style={styles.bulletPoint}>   - Android 12 (API Level 31)</Text>
            <Text style={styles.bulletPoint}>4. In SDK Tools tab, ensure these are installed:</Text>
            <Text style={styles.bulletPoint}>   - Android SDK Build-Tools</Text>
            <Text style={styles.bulletPoint}>   - Android Emulator</Text>
            <Text style={styles.bulletPoint}>   - Android SDK Platform-Tools</Text>
            <Text style={styles.bulletPoint}>   - Intel x86 Emulator Accelerator (HAXM installer)</Text>

          </View>
        );

      case 'project':
        return (
          <View>
            <Text style={styles.sectionTitle}>Project Creation</Text>

            <Text style={styles.subTitle}>Step 4.1: Create New React Native Project</Text>
            <Text style={styles.bulletPoint}>1. Open Command Prompt or PowerShell</Text>
            <Text style={styles.bulletPoint}>2. Navigate to your desired project directory</Text>
            <Text style={styles.bulletPoint}>3. Create the project:</Text>
            <Text style={styles.codeBlock}>npx react-native init IncredibleTodoListApp</Text>
            <Text style={styles.bulletPoint}>4. Navigate to the project directory:</Text>
            <Text style={styles.codeBlock}>cd IncredibleTodoListApp</Text>

            <Text style={styles.subTitle}>Step 4.2: Project Structure Overview</Text>
            <Text style={styles.content}>Your new project will have the following structure:</Text>
            <Text style={styles.bulletPoint}>• android/: Android-specific code and configuration</Text>
            <Text style={styles.bulletPoint}>• ios/: iOS-specific code and configuration (for future iOS development)</Text>
            <Text style={styles.bulletPoint}>• src/: Your application source code (create this folder)</Text>
            <Text style={styles.bulletPoint}>• App.js: Main application component</Text>
            <Text style={styles.bulletPoint}>• index.js: Application entry point</Text>
            <Text style={styles.bulletPoint}>• package.json: Project dependencies and scripts</Text>
          </View>
        );

      case 'running':
        return (
          <View>
            <Text style={styles.sectionTitle}>Running the Project</Text>

            <Text style={styles.subTitle}>Step 5.1: Create Android Virtual Device (AVD)</Text>
            <Text style={styles.bulletPoint}>1. Open Android Studio</Text>
            <Text style={styles.bulletPoint}>2. Click on "More Actions" &gt; "AVD Manager"</Text>
            <Text style={styles.bulletPoint}>3. Click "Create Virtual Device"</Text>
            <Text style={styles.bulletPoint}>4. Select a device (e.g., Pixel 4)</Text>
            <Text style={styles.bulletPoint}>5. Choose a system image (API Level 33 recommended)</Text>
            <Text style={styles.bulletPoint}>6. Name your AVD (e.g., "Pixel_4_API_33")</Text>
            <Text style={styles.bulletPoint}>7. Click "Finish"</Text>

            <Text style={styles.subTitle}>Step 5.2: Start the Android Emulator</Text>
            <Text style={styles.bulletPoint}>1. In AVD Manager, click the "Play" button next to your created device</Text>
            <Text style={styles.bulletPoint}>2. Wait for the emulator to fully boot up</Text>
            <Text style={styles.bulletPoint}>3. Verify the device is detected:</Text>
            <Text style={styles.codeBlock}>adb devices</Text>

            <Text style={styles.subTitle}>Step 5.3: Run the React Native Application</Text>
            <Text style={styles.bulletPoint}>1. Open two Command Prompt windows</Text>
            <Text style={styles.bulletPoint}>2. In the first window, navigate to your project directory and start Metro:</Text>
            <Text style={styles.codeBlock}>cd IncredibleTodoListApp{'\n'}npx react-native start</Text>
            <Text style={styles.bulletPoint}>3. In the second window (keep Metro running), run:</Text>
            <Text style={styles.codeBlock}>cd IncredibleTodoListApp{'\n'}npx react-native run-android</Text>

            <Text style={styles.content}>The app should automatically install and launch on your Android emulator.</Text>
          </View>
        );

      case 'troubleshooting':
        return (
          <View>
            <Text style={styles.sectionTitle}>Troubleshooting</Text>

            <Text style={styles.subTitle}>Common Issue #1: Metro bundler port conflict</Text>
            <Text style={styles.content}>Problem: Error "Port 8081 already in use"</Text>
            <Text style={styles.content}>Solution:</Text>
            <Text style={styles.codeBlock}>npx react-native start --port=8082{'\n'}npx react-native run-android --port=8082</Text>

            <Text style={styles.subTitle}>Common Issue #2: Android SDK not found</Text>
            <Text style={styles.content}>Problem: "Android SDK not found" error</Text>
            <Text style={styles.content}>Solution:</Text>
            <Text style={styles.bulletPoint}>1. Verify ANDROID_HOME environment variable is set correctly</Text>
            <Text style={styles.bulletPoint}>2. Restart Command Prompt/PowerShell</Text>
            <Text style={styles.bulletPoint}>3. Check SDK path in Android Studio settings</Text>

            <Text style={styles.subTitle}>Common Issue #3: Build failures</Text>
            <Text style={styles.content}>Problem: Gradle build fails</Text>
            <Text style={styles.content}>Solution:</Text>
            <Text style={styles.bulletPoint}>1. Clean the project:</Text>
            <Text style={styles.codeBlock}>cd android{'\n'}./gradlew clean{'\n'}cd ..</Text>
            <Text style={styles.bulletPoint}>2. Reset Metro cache:</Text>
            <Text style={styles.codeBlock}>npx react-native start --reset-cache</Text>

            <Text style={styles.subTitle}>Debugging Commands</Text>
            <Text style={styles.bulletPoint}>• View device logs: npx react-native log-android</Text>
            <Text style={styles.bulletPoint}>• Clear app data: Uninstall app from emulator and reinstall</Text>
            <Text style={styles.bulletPoint}>• Check React Native environment: npx react-native doctor</Text>
          </View>
        );

      case 'resources':
        return (
          <View>
            <Text style={styles.sectionTitle}>Resources</Text>

            <Text style={styles.subTitle}>Official Documentation</Text>
            <Text style={styles.bulletPoint}>• React Native Official Docs: https://reactnative.dev/docs/getting-started</Text>
            <Text style={styles.bulletPoint}>• React Native CLI Documentation: https://github.com/react-native-community/cli</Text>
            <Text style={styles.bulletPoint}>• Android Developer Guide: https://developer.android.com/docs</Text>

            <Text style={styles.subTitle}>Development Tools</Text>
            <Text style={styles.bulletPoint}>• Flipper (Debugging): https://fbflipper.com/</Text>
            <Text style={styles.bulletPoint}>• React Native Debugger: https://github.com/jhen0409/react-native-debugger</Text>
            <Text style={styles.bulletPoint}>• VS Code React Native Extension: https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native</Text>

            <Text style={styles.subTitle}>Learning Resources</Text>
            <Text style={styles.bulletPoint}>• React Native Tutorial: https://reactnative.dev/docs/tutorial</Text>
            <Text style={styles.bulletPoint}>• JavaScript ES6+ Guide: https://developer.mozilla.org/en-US/docs/Web/JavaScript</Text>
            <Text style={styles.bulletPoint}>• React Fundamentals: https://react.dev/learn</Text>

            <Text style={styles.subTitle}>Community and Support</Text>
            <Text style={styles.bulletPoint}>• React Native Community: https://github.com/react-native-community</Text>
            <Text style={styles.bulletPoint}>• Stack Overflow React Native: https://stackoverflow.com/questions/tagged/react-native</Text>
            <Text style={styles.bulletPoint}>• Reddit r/reactnative: https://www.reddit.com/r/reactnative/</Text>
            <Text style={styles.bulletPoint}>• Discord React Native Community: https://discord.gg/react-native</Text>

            <Text style={styles.subTitle}>Video Tutorials</Text>
            <Text style={styles.bulletPoint}>• Programming with Mosh: React Native tutorials on YouTube</Text>
            <Text style={styles.bulletPoint}>• Academind: React Native crash courses</Text>
            <Text style={styles.bulletPoint}>• The Net Ninja: React Native playlist</Text>

            <Text style={styles.subTitle}>Useful Libraries for Todo Apps</Text>
            <Text style={styles.bulletPoint}>• React Navigation: https://reactnavigation.org/ (for app navigation)</Text>
            <Text style={styles.bulletPoint}>• AsyncStorage: https://github.com/react-native-async-storage/async-storage (for local storage)</Text>
            <Text style={styles.bulletPoint}>• React Native Vector Icons: https://github.com/oblador/react-native-vector-icons (for icons)</Text>
            <Text style={styles.bulletPoint}>• React Native Paper: https://reactnativepaper.com/ (UI components)</Text>

            <Text style={styles.subTitle}>Package Management</Text>
            <Text style={styles.bulletPoint}>• npm Documentation: https://docs.npmjs.com/</Text>
            <Text style={styles.bulletPoint}>• Yarn Package Manager: https://yarnpkg.com/</Text>
            <Text style={styles.bulletPoint}>• React Native Directory: https://reactnative.directory/ (curated list of packages)</Text>
          </View>
        );

      default:
        return <Text style={styles.content}>Select a section to view content.</Text>;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#2c3e50" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>📱 React Native Development Setup Guide</Text>
      </View>

      {/* Navigation */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.navigationContainer}
        contentContainerStyle={styles.navigationContent}
      >
        {sections.map((section) => (
          <TouchableOpacity
            key={section.id}
            style={[
              styles.navButton,
              activeSection === section.id && styles.activeNavButton
            ]}
            onPress={() => setActiveSection(section.id)}
          >
            <Text style={styles.navIcon}>{section.icon}</Text>
            <Text style={[
              styles.navButtonText,
              activeSection === section.id && styles.activeNavButtonText
            ]}>
              {section.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Content */}
      <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
        {getContent()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#2c3e50',
    padding: 20,
    paddingBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  navigationContainer: {
    backgroundColor: '#34495e',
    maxHeight: 80,
  },
  navigationContent: {
    paddingHorizontal: 10,
  },
  navButton: {
    backgroundColor: '#34495e',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 8,
    alignItems: 'center',
    minWidth: 120,
  },
  activeNavButton: {
    backgroundColor: '#3498db',
  },
  navIcon: {
    fontSize: 16,
    marginBottom: 2,
  },
  navButtonText: {
    color: '#bdc3c7',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  activeNavButtonText: {
    color: 'white',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#34495e',
    marginTop: 15,
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
    color: '#2c3e50',
    lineHeight: 24,
    marginBottom: 15,
  },
  bulletPoint: {
    fontSize: 14,
    color: '#2c3e50',
    lineHeight: 22,
    marginBottom: 5,
    paddingLeft: 10,
  },
  codeBlock: {
    fontFamily: 'monospace',
    fontSize: 14,
    backgroundColor: '#ecf0f1',
    padding: 10,
    borderRadius: 6,
    marginVertical: 8,
    color: '#2c3e50',
    borderLeftWidth: 4,
    borderLeftColor: '#3498db',
  },
});

export default App;