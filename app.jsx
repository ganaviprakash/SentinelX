const { useState, useEffect, useRef, useMemo, useCallback } = React;

// --- Icons (Lucide SVG equivalents) ---
const Shield = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const AlertTriangle = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>;
const Wind = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></svg>;
const Flame = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>;
const Droplet = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>;
const Activity = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>;
const MapPin = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
const Search = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>;
const Volume2 = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>;
const VolumeX = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>;
const Moon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>;
const Sun = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>;
const Crosshair = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/></svg>;
const Navigation = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>;
const Bell = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>;

// --- Helper Functions ---
const generateRiskScore = (severity) => {
  if (severity === 'High') return Math.floor(Math.random() * 21) + 80; // 80-100
  if (severity === 'Moderate') return Math.floor(Math.random() * 30) + 50; // 50-79
  return Math.floor(Math.random() * 50); // 0-49
};

const getRiskLabel = (score) => {
  if (score >= 80) return { label: 'Critical', color: 'text-danger', bg: 'bg-danger/20', border: 'border-danger/50' };
  if (score >= 50) return { label: 'Warning', color: 'text-[theme(colors.yellow.500)]', bg: 'bg-yellow-500/20', border: 'border-yellow-500/50' };
  return { label: 'Safe', color: 'text-success', bg: 'bg-success/20', border: 'border-success/50' };
};

const DISASTER_TYPES = [
  { type: 'Flood', icon: Droplet, recommendations: ['Move to higher ground immediately.', 'Do not walk or drive through flood waters.', 'Disconnect electrical appliances.'] },
  { type: 'Earthquake', icon: Activity, recommendations: ['Drop, Cover, and Hold on.', 'Stay away from windows and heavy furniture.', 'If outdoors, move to an open area.'] },
  { type: 'Cyclone', icon: Wind, recommendations: ['Stay indoors and away from windows.', 'Secure loose outdoor items.', 'Monitor official weather updates.'] },
  { type: 'Wildfire', icon: Flame, recommendations: ['Evacuate immediately if advised.', 'Keep windows and doors closed.', 'Wear an N95 mask to avoid smoke inhalation.'] }
];

const MOCK_LOCATIONS = {
  'tokyo': { lat: 35.6762, lng: 139.6503, name: 'Tokyo, Japan', active: ['Earthquake'] },
  'miami': { lat: 25.7617, lng: -80.1918, name: 'Miami, FL', active: ['Cyclone', 'Flood'] },
  'los angeles': { lat: 34.0522, lng: -118.2437, name: 'Los Angeles, CA', active: ['Wildfire', 'Earthquake'] },
  'london': { lat: 51.5074, lng: -0.1278, name: 'London, UK', active: [] },
  'sydney': { lat: -33.8688, lng: 151.2093, name: 'Sydney, Australia', active: ['Wildfire'] },
  'jakarta': { lat: -6.2088, lng: 106.8456, name: 'Jakarta, Indonesia', active: ['Flood'] },
  'default': { lat: 40.7128, lng: -74.0060, name: 'New York, NY', active: [] }
};

// --- Components ---

const RiskMeter = ({ score }) => {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;
  
  const { color } = getRiskLabel(score);

  return (
    <div className="relative flex items-center justify-center filter drop-shadow-lg">
      <svg className="transform -rotate-90 w-40 h-40">
        <circle
          cx="80" cy="80" r={radius}
          stroke="currentColor" strokeWidth="8" fill="transparent"
          className="text-gray-200 dark:text-gray-700"
        />
        <circle
          cx="80" cy="80" r={radius}
          stroke="currentColor" strokeWidth="10" fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className={`${color} transition-all duration-1000 ease-out`}
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-4xl font-bold">{score}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">Risk Score</span>
      </div>
    </div>
  );
};

const DashboardMap = ({ lat, lng, disasters }) => {
  const mapRef = useRef(null);
  const leafletInstance = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    if (!mapRef.current) return;
    
    if (!leafletInstance.current) {
      leafletInstance.current = L.map(mapRef.current).setView([lat, lng], 10);
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap cont.'
      }).addTo(leafletInstance.current);
    } else {
      leafletInstance.current.setView([lat, lng], 10);
    }

    // Clear old markers
    markersRef.current.forEach(m => m.remove());
    markersRef.current = [];

    // Add main location marker
    const mainIcon = L.divIcon({
      className: 'bg-accent w-4 h-4 rounded-full border-2 border-white shadow-[0_0_15px_rgba(45,156,219,0.8)] animate-pulse',
      iconSize: [16, 16]
    });
    const mainMarker = L.marker([lat, lng], { icon: mainIcon }).addTo(leafletInstance.current);
    mainMarker.bindPopup('<b>Current Location</b>').openPopup();
    markersRef.current.push(mainMarker);

    // Add disaster overlays
    disasters.forEach((d, idx) => {
      const offsetLat = lat + (Math.random() * 0.1 - 0.05);
      const offsetLng = lng + (Math.random() * 0.1 - 0.05);
      
      let overlayColor = d.severity === 'High' ? '#EB5757' : '#F59E0B'; // red or yellow
      
      const circle = L.circle([offsetLat, offsetLng], {
        color: overlayColor,
        fillColor: overlayColor,
        fillOpacity: 0.3,
        radius: d.severity === 'High' ? 4000 : 2500
      }).addTo(leafletInstance.current);
      
      circle.bindPopup(`<b>${d.type}</b><br/>Severity: ${d.severity}`);
      markersRef.current.push(circle);
    });

  }, [lat, lng, disasters]);

  return <div id="disaster-map" ref={mapRef} className="w-full h-full rounded-2xl"></div>;
};

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [voiceAlerts, setVoiceAlerts] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [locationName, setLocationName] = useState('New York, NY');
  const [coordinates, setCoordinates] = useState({ lat: 40.7128, lng: -74.0060 });
  const [isSearching, setIsSearching] = useState(false);
  
  // Disaster Data State
  const [disasters, setDisasters] = useState([]);
  const [globalRisk, setGlobalRisk] = useState(0);

  // Sync dark mode to HTML tag
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Speech helper
  const speakAlert = useCallback((text) => {
    if (!voiceAlerts || !('speechSynthesis' in window)) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.volume = 1;
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }, [voiceAlerts]);

  // Simulate Engine Analysis
  const analyzeLocation = useCallback((locName) => {
    setIsSearching(true);
    setTimeout(() => {
      const key = locName.toLowerCase().trim();
      let mockData = MOCK_LOCATIONS[key];
      
      if (!mockData) {
        // Generate random fake data if not in predefined list
        const randomSeverity = ['Low', 'Moderate', 'High'];
        const numDisasters = Math.floor(Math.random() * 3); // 0 to 2
        const randomActive = [];
        for (let i=0; i<numDisasters; i++) {
          randomActive.push(DISASTER_TYPES[Math.floor(Math.random() * DISASTER_TYPES.length)].type);
        }
        mockData = {
          lat: coordinates.lat + (Math.random()*2-1),
          lng: coordinates.lng + (Math.random()*2-1),
          name: locName,
          active: [...new Set(randomActive)]
        };
      }

      setLocationName(mockData.name);
      setCoordinates({ lat: mockData.lat, lng: mockData.lng });

      // Build disaster objects
      const generatedDisasters = mockData.active.map(type => {
        const severity = Math.random() > 0.5 ? 'High' : 'Moderate';
        const typeInfo = DISASTER_TYPES.find(d => d.type === type);
        return {
          id: Math.random().toString(36).substr(2, 9),
          type,
          severity,
          icon: typeInfo.icon,
          recommendations: typeInfo.recommendations,
          score: generateRiskScore(severity),
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      });

      setDisasters(generatedDisasters);

      if (generatedDisasters.length > 0) {
        const maxScore = Math.max(...generatedDisasters.map(d => d.score));
        setGlobalRisk(maxScore);
        
        // Voice Alert
        const status = getRiskLabel(maxScore);
        if (status.label === 'Critical') {
          speakAlert(`Critical Alert. High risk detected in ${mockData.name}. Please follow safety guidelines.`);
        } else if (status.label === 'Warning') {
          speakAlert(`Warning. Moderate risk detected in ${mockData.name}.`);
        }
      } else {
        setGlobalRisk(generateRiskScore('Low')); // Safe
      }
      setIsSearching(false);
    }, 800); // Simulate network delay
  }, [coordinates, speakAlert]);

  // Initial Load
  useEffect(() => {
    analyzeLocation('New York, NY');
    // eslint-disable-next-line
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      analyzeLocation(searchInput);
      setSearchInput('');
    }
  };

  const handleGeolocate = () => {
    if (navigator.geolocation) {
      setIsSearching(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates({ lat: position.coords.latitude, lng: position.coords.longitude });
          // Reverse geocode mock
          analyzeLocation('Your Current Location');
        },
        (error) => {
          console.error("Error getting location", error);
          setIsSearching(false);
          alert("Could not get your location. Please enter it manually.");
        }
      );
    }
  };

  const statusInfo = getRiskLabel(globalRisk);

  return (
    <div className="min-h-screen relative overflow-hidden pb-12">
      {/* Background Graphic Elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent/20 blur-[120px] pointer-events-none"></div>
      <div className={`absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full blur-[150px] pointer-events-none ${statusInfo.bg.replace('/20', '/10')}`}></div>

      {/* Navbar */}
      <nav className="glass-panel sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-xl shadow-lg">
            <Shield className="text-white w-6 h-6" />
          </div>
          <h1 className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            DisasterAlert <span className="text-accent font-black">AI</span>
          </h1>
        </div>
        
        <div className="flex items-center gap-4">
          <button onClick={() => setVoiceAlerts(!voiceAlerts)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors" title="Voice Alerts">
            {voiceAlerts ? <Volume2 className="w-5 h-5 text-accent" /> : <VolumeX className="w-5 h-5 text-gray-400" />}
          </button>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <div className="relative cursor-pointer">
            <Bell className="w-6 h-6" />
            {disasters.length > 0 && <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-danger rounded-full border-2 border-white dark:border-[#0B1C2C] animate-pulse"></span>}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 mt-8">
        
        {/* Search & Location Bar */}
        <div className="glass-panel rounded-2xl p-4 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between animate-fade-in-up">
          <div className="flex items-center gap-3 w-full md:w-auto">
            <MapPin className="text-accent w-6 h-6" />
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Active Region</p>
              <h2 className="text-xl font-semibold">{locationName}</h2>
            </div>
          </div>
          
          <form onSubmit={handleSearch} className="flex-1 w-full max-w-xl flex gap-2 relative">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Enter city, region, or zip code..."
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800/50 border border-transparent focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder-gray-400"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
            <button type="submit" disabled={isSearching} className="bg-primary text-white dark:bg-white dark:text-primary px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-70">
              {isSearching ? <Activity className="w-5 h-5 animate-spin" /> : 'Scan'}
            </button>
            <button type="button" onClick={handleGeolocate} className="p-3 ml-2 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-accent hover:text-accent transition-colors hidden sm:flex items-center justify-center">
              <Crosshair className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* Status Banner */}
        <div className={`p-4 rounded-xl border-l-4 mb-8 flex items-center justify-between ${statusInfo.bg} ${statusInfo.border}`}>
          <div className="flex items-center gap-3">
            <AlertTriangle className={`w-6 h-6 ${statusInfo.color} ${statusInfo.label === 'Critical' ? 'animate-pulse' : ''}`} />
            <div>
              <h3 className={`font-bold ${statusInfo.color}`}>AI Status: {statusInfo.label}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {statusInfo.label === 'Safe' ? 'No immediate threats detected in your area.' : `Detected ${disasters.length} active emergency events. Proceed with caution.`}
              </p>
            </div>
          </div>
          <div className="hidden sm:block">
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${statusInfo.bg} ${statusInfo.color}`}>Auto-Monitoring ON</span>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column */}
          <div className="space-y-8 flex flex-col">
            
            {/* Risk Meter Card */}
            <div className="glass-panel p-6 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute top-4 left-4 text-sm font-semibold flex items-center gap-2">
                <Activity className="w-4 h-4 text-accent" /> System Assessment
              </div>
              <div className="mt-6 mb-2">
                <RiskMeter score={globalRisk} />
              </div>
              <p className="text-center text-sm text-gray-500 mt-4 leading-relaxed px-4">
                Score is calculated based on multi-factor simulation identifying regional threat severity.
              </p>
            </div>

            {/* Active Disasters List */}
            <div className="glass-panel p-6 rounded-3xl flex-1">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" /> Active Threats
                </h3>
                <span className="bg-gray-200 dark:bg-gray-800 text-xs px-2 py-1 rounded-md font-mono">{disasters.length}</span>
              </div>
              
              {disasters.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-48 text-gray-400">
                  <Shield className="w-12 h-12 mb-3 opacity-20" />
                  <p>All clear. No active events.</p>
                </div>
              ) : (
                <div className="space-y-4 overflow-y-auto pr-2 no-scrollbar" style={{maxHeight: '300px'}}>
                  {disasters.map(d => {
                    const Icon = d.icon;
                    const isHigh = d.severity === 'High';
                    return (
                      <div key={d.id} className={`p-4 rounded-xl border ${isHigh ? 'border-danger/30 bg-danger/5' : 'border-yellow-500/30 bg-yellow-500/5'} flex gap-4 transition-transform hover:-translate-y-1`}>
                        <div className={`p-3 rounded-full h-fit ${isHigh ? 'bg-danger text-white' : 'bg-yellow-500 text-white'}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex justify-between items-center w-full mb-1">
                            <h4 className="font-bold">{d.type}</h4>
                            <span className="text-xs text-gray-500">{d.time}</span>
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-sm ${isHigh ? 'bg-danger/20 text-danger' : 'bg-yellow-500/20 text-[theme(colors.yellow.600)] dark:text-yellow-400'}`}>
                              {d.severity} Severity
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
            
          </div>

          {/* Middle/Right Column (Map & Recommendations) */}
          <div className="lg:col-span-2 space-y-8 flex flex-col">
            
            {/* Interactive Map */}
            <div className="glass-panel p-2 rounded-3xl h-[400px] relative">
              <DashboardMap lat={coordinates.lat} lng={coordinates.lng} disasters={disasters} />
              
              {/* Safe Route Overlay Widget */}
              {statusInfo.label !== 'Safe' && (
                <div className="absolute top-6 right-6 z-[500] glass p-4 rounded-xl shadow-2xl animate-fade-in border border-accent/20 max-w-[200px]">
                  <div className="flex items-center gap-2 mb-2 text-accent font-bold text-sm">
                    <Navigation className="w-4 h-4" /> AI Route Suggestion
                  </div>
                  <p className="text-xs text-gray-800 dark:text-gray-200">
                    Highest ground detected 2 miles <strong>North-East</strong>. Avoid main highways.
                  </p>
                </div>
              )}
            </div>

            {/* Smart Safety Engine */}
            <div className="glass-panel p-6 rounded-3xl">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-success" /> AI Safety Actions
              </h3>
              
              {disasters.length === 0 ? (
                <p className="text-gray-500">Normal operations. Maintain general preparedness.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {disasters.map(d => (
                    <div key={d.id + 'rec'} className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                      <h4 className="font-semibold text-sm mb-3 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-2">
                        {d.type} Protocol
                      </h4>
                      <ul className="space-y-2">
                        {d.recommendations.map((rec, i) => (
                          <li key={i} className="text-xs text-gray-600 dark:text-gray-300 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0"></span>
                            {rec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

// Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

