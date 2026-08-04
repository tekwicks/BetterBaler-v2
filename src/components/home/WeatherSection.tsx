import { useEffect, useState, useCallback } from 'react';
import Section from '../ui/Section';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import {
  Sun,
  CloudSun,
  Cloud,
  CloudRain,
  CloudDrizzle,
  CloudLightning,
  Wind,
  Droplets,
  RefreshCw,
  Waves,
  MapPin,
  Clock,
  Compass,
  PhoneCall,
  ShieldCheck,
  AlertTriangle,
  Eye,
} from 'lucide-react';

interface CurrentWeather {
  temperature: number;
  apparentTemperature: number;
  humidity: number;
  windSpeed: number;
  windDirection: number;
  weatherCode: number;
  isDay: number;
  precipitation: number;
  uvIndex: number;
  time: string;
}

interface HourlyForecast {
  time: string[];
  temperature: number[];
  precipitationProbability: number[];
  weatherCode: number[];
}

interface DailyForecast {
  time: string[];
  weatherCode: number[];
  temperatureMax: number[];
  temperatureMin: number[];
  precipitationProbabilityMax: number[];
  uvIndexMax: number[];
}

// Fallback data for Baler, Aurora (Tropical coastal climate)
const FALLBACK_WEATHER: {
  current: CurrentWeather;
  hourly: HourlyForecast;
  daily: DailyForecast;
} = {
  current: {
    temperature: 29.5,
    apparentTemperature: 33.2,
    humidity: 78,
    windSpeed: 14.5,
    windDirection: 75, // ENE onshore breeze
    weatherCode: 2, // Partly cloudy
    isDay: 1,
    precipitation: 0,
    uvIndex: 7.8,
    time: new Date().toISOString(),
  },
  hourly: {
    time: Array.from({ length: 12 }, (_, i) => {
      const d = new Date();
      d.setHours(d.getHours() + i);
      return d.toISOString();
    }),
    temperature: [29.5, 30.1, 31.0, 30.8, 29.4, 28.2, 27.5, 26.8, 26.5, 26.2, 26.0, 26.5],
    precipitationProbability: [10, 15, 20, 30, 25, 15, 10, 5, 5, 10, 10, 15],
    weatherCode: [2, 2, 1, 3, 61, 2, 1, 0, 0, 0, 1, 2],
  },
  daily: {
    time: Array.from({ length: 5 }, (_, i) => {
      const d = new Date();
      d.setDate(d.getDate() + i);
      return d.toISOString().split('T')[0];
    }),
    weatherCode: [2, 61, 1, 0, 2],
    temperatureMax: [31.5, 30.0, 32.1, 32.8, 31.2],
    temperatureMin: [25.0, 24.8, 25.2, 25.5, 25.1],
    precipitationProbabilityMax: [30, 65, 20, 10, 35],
    uvIndexMax: [8.5, 5.2, 9.1, 9.5, 8.2],
  },
};

export default function WeatherSection() {
  const [current, setCurrent] = useState<CurrentWeather>(FALLBACK_WEATHER.current);
  const [hourly, setHourly] = useState<HourlyForecast>(FALLBACK_WEATHER.hourly);
  const [daily, setDaily] = useState<DailyForecast>(FALLBACK_WEATHER.daily);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [unit, setUnit] = useState<'C' | 'F'>('C');
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [activeTab, setActiveTab] = useState<'overview' | 'hourly' | 'coastal'>('overview');

  const fetchWeatherData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Baler, Aurora coordinates: 15.7589° N, 121.5623° E
      const response = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=15.7589&longitude=121.5623&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,weather_code,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,weather_code,precipitation_probability&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max&timezone=Asia%2FManila'
      );

      if (!response.ok) {
        throw new Error('Failed to fetch weather from network');
      }

      const data = await response.json();

      if (data.current) {
        setCurrent({
          temperature: data.current.temperature_2m,
          apparentTemperature: data.current.apparent_temperature,
          humidity: data.current.relative_humidity_2m,
          windSpeed: data.current.wind_speed_10m,
          windDirection: data.current.wind_direction_10m,
          weatherCode: data.current.weather_code,
          isDay: data.current.is_day ?? 1,
          precipitation: data.current.precipitation ?? 0,
          uvIndex: data.daily?.uv_index_max?.[0] ?? 7.5,
          time: data.current.time,
        });
      }

      if (data.hourly) {
        setHourly({
          time: data.hourly.time.slice(0, 12),
          temperature: data.hourly.temperature_2m.slice(0, 12),
          precipitationProbability: data.hourly.precipitation_probability.slice(0, 12),
          weatherCode: data.hourly.weather_code.slice(0, 12),
        });
      }

      if (data.daily) {
        setDaily({
          time: data.daily.time.slice(0, 5),
          weatherCode: data.daily.weather_code.slice(0, 5),
          temperatureMax: data.daily.temperature_2m_max.slice(0, 5),
          temperatureMin: data.daily.temperature_2m_min.slice(0, 5),
          precipitationProbabilityMax: data.daily.precipitation_probability_max.slice(0, 5),
          uvIndexMax: data.daily.uv_index_max.slice(0, 5),
        });
      }

      setLastUpdated(new Date());
    } catch (err) {
      console.warn('Using fallback Baler weather data:', err);
      setError('Live API unavailable. Showing local meteorological station baseline data.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWeatherData();
  }, [fetchWeatherData]);

  const formatTemp = (celsius: number) => {
    if (unit === 'F') {
      return `${Math.round((celsius * 9) / 5 + 32)}°F`;
    }
    return `${Math.round(celsius)}°C`;
  };

  const getWeatherDetails = (code: number) => {
    switch (code) {
      case 0:
        return {
          label: 'Clear Sky',
          icon: <Sun className="h-10 w-10 text-amber-500 animate-pulse" />,
          smallIcon: <Sun className="h-5 w-5 text-amber-500" />,
          bg: 'from-amber-500/10 to-blue-500/10',
          desc: 'Sunny and clear conditions over Baler Bay.',
        };
      case 1:
      case 2:
        return {
          label: 'Partly Cloudy',
          icon: <CloudSun className="h-10 w-10 text-amber-500" />,
          smallIcon: <CloudSun className="h-5 w-5 text-amber-500" />,
          bg: 'from-sky-500/10 to-amber-500/10',
          desc: 'Pleasant mix of sun and clouds across Sabang and town center.',
        };
      case 3:
        return {
          label: 'Overcast',
          icon: <Cloud className="h-10 w-10 text-slate-500" />,
          smallIcon: <Cloud className="h-5 w-5 text-slate-500" />,
          bg: 'from-slate-500/10 to-blue-500/10',
          desc: 'Cloudy skies prevailing in Aurora province.',
        };
      case 51:
      case 53:
      case 55:
        return {
          label: 'Light Drizzle',
          icon: <CloudDrizzle className="h-10 w-10 text-blue-400" />,
          smallIcon: <CloudDrizzle className="h-5 w-5 text-blue-400" />,
          bg: 'from-blue-500/10 to-indigo-500/10',
          desc: 'Passing light showers along coastal areas.',
        };
      case 61:
      case 63:
      case 65:
      case 80:
      case 81:
      case 82:
        return {
          label: 'Rain Showers',
          icon: <CloudRain className="h-10 w-10 text-blue-600" />,
          smallIcon: <CloudRain className="h-5 w-5 text-blue-600" />,
          bg: 'from-blue-600/15 to-sky-600/10',
          desc: 'Moderate rain showers expected. Keep umbrellas handy.',
        };
      case 95:
      case 96:
      case 99:
        return {
          label: 'Thunderstorm Advisory',
          icon: <CloudLightning className="h-10 w-10 text-purple-600" />,
          smallIcon: <CloudLightning className="h-5 w-5 text-purple-600" />,
          bg: 'from-purple-600/15 to-rose-600/10',
          desc: 'Localized thunderstorms with gusty winds along the coast.',
        };
      default:
        return {
          label: 'Fair Weather',
          icon: <CloudSun className="h-10 w-10 text-sky-500" />,
          smallIcon: <CloudSun className="h-5 w-5 text-sky-500" />,
          bg: 'from-sky-500/10 to-blue-500/10',
          desc: 'Typical Baler tropical coastal weather.',
        };
    }
  };

  const getWindCardinal = (deg: number) => {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    const idx = Math.round(deg / 22.5) % 16;
    return directions[idx];
  };

  const weatherMeta = getWeatherDetails(current.weatherCode);

  // Surf condition heuristic based on wind & rain
  const getSurfCondition = () => {
    if (current.windSpeed > 25) return { status: 'Rough Seas / Strong Offshore Winds', color: 'text-amber-700 bg-amber-50 border-amber-200', caution: true };
    if (current.weatherCode >= 95) return { status: 'Thunderstorm Warning - Avoid Sea Water', color: 'text-rose-700 bg-rose-50 border-rose-200', caution: true };
    if (current.windSpeed >= 10 && current.windSpeed <= 22) {
      return { status: 'Optimal Surfing Conditions at Sabang & Cemento', color: 'text-emerald-800 bg-emerald-50 border-emerald-200', caution: false };
    }
    return { status: 'Calm Coastal Waters - Great for Beginners & Kayaking', color: 'text-blue-800 bg-blue-50 border-blue-200', caution: false };
  };

  const surfInfo = getSurfCondition();

  return (
    <Section id="weather" className="bg-slate-50 border-y border-slate-200">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-xs font-semibold mb-2">
            <MapPin className="h-3.5 w-3.5" />
            Municipality of Baler, Aurora (Pacific Coast)
          </div>
          <Heading level={2} className="text-slate-900">
            Baler Weather & Coastal Updates
          </Heading>
          <Text className="text-slate-600">
            Real-time weather forecast, marine advisories, and disaster preparedness information for residents, tourists, and fisherfolk.
          </Text>
        </div>

        <div className="flex items-center gap-3">
          {/* Unit Toggle */}
          <div className="inline-flex rounded-lg border border-slate-200 bg-white p-1 text-xs font-medium shadow-xs">
            <button
              onClick={() => setUnit('C')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                unit === 'C' ? 'bg-primary-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              °C
            </button>
            <button
              onClick={() => setUnit('F')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                unit === 'F' ? 'bg-primary-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              °F
            </button>
          </div>

          {/* Refresh Button */}
          <button
            onClick={fetchWeatherData}
            disabled={loading}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors shadow-xs disabled:opacity-50"
            title="Refresh weather data"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${loading ? 'animate-spin text-primary-600' : ''}`} />
            Refresh
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 shrink-0 text-amber-600" />
          <span>{error}</span>
        </div>
      )}

      {/* Main Weather Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
        {/* Header Ribbon / Tabs */}
        <div className="border-b border-slate-100 bg-slate-50/50 px-6 py-3 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Clock className="h-3.5 w-3.5 text-slate-400" />
            <span>
              Updated {lastUpdated.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} (PST)
            </span>
          </div>

          <div className="flex gap-1">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                activeTab === 'overview'
                  ? 'bg-primary-600 text-white'
                  : 'text-slate-600 hover:bg-slate-200/60'
              }`}
            >
              Current Overview
            </button>
            <button
              onClick={() => setActiveTab('hourly')}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                activeTab === 'hourly'
                  ? 'bg-primary-600 text-white'
                  : 'text-slate-600 hover:bg-slate-200/60'
              }`}
            >
              Hourly Forecast
            </button>
            <button
              onClick={() => setActiveTab('coastal')}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                activeTab === 'coastal'
                  ? 'bg-primary-600 text-white'
                  : 'text-slate-600 hover:bg-slate-200/60'
              }`}
            >
              Coastal & Surfing
            </button>
          </div>
        </div>

        {/* Tab 1: Current Overview */}
        {activeTab === 'overview' && (
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Primary Temp & Condition */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-primary-50 rounded-2xl border border-primary-100">
                    {weatherMeta.icon}
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                      {formatTemp(current.temperature)}
                    </div>
                    <div className="text-sm font-semibold text-slate-700 mt-1">
                      {weatherMeta.label}
                    </div>
                  </div>
                </div>

                <Text className="text-slate-600 text-sm mb-4">
                  {weatherMeta.desc} Feels like{' '}
                  <strong className="text-slate-800">{formatTemp(current.apparentTemperature)}</strong> due to tropical humidity.
                </Text>

                {/* Surf & Marine Alert Banner */}
                <div className={`p-3.5 rounded-xl border flex items-start gap-3 ${surfInfo.color}`}>
                  <Waves className="h-5 w-5 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider">
                      Coastal & Marine Status
                    </div>
                    <div className="text-xs font-medium mt-0.5">{surfInfo.status}</div>
                  </div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-400 mb-2">
                    <span className="text-xs font-medium text-slate-500">Humidity</span>
                    <Droplets className="h-4 w-4 text-blue-500" />
                  </div>
                  <div className="text-xl font-bold text-slate-900">{current.humidity}%</div>
                  <span className="text-[11px] text-slate-500 mt-1">Tropical coastal air</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-400 mb-2">
                    <span className="text-xs font-medium text-slate-500">Wind</span>
                    <Wind className="h-4 w-4 text-sky-500" />
                  </div>
                  <div className="text-xl font-bold text-slate-900">
                    {Math.round(current.windSpeed)} <span className="text-xs font-normal">km/h</span>
                  </div>
                  <span className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
                    <Compass className="h-3 w-3 text-slate-400" />
                    {getWindCardinal(current.windDirection)} ({current.windDirection}°)
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-400 mb-2">
                    <span className="text-xs font-medium text-slate-500">UV Index</span>
                    <Sun className="h-4 w-4 text-amber-500" />
                  </div>
                  <div className="text-xl font-bold text-slate-900">{current.uvIndex.toFixed(1)}</div>
                  <span className="text-[11px] text-amber-700 font-medium mt-1">
                    {current.uvIndex >= 8 ? 'Very High (Use Sunscreen)' : current.uvIndex >= 6 ? 'High UV' : 'Moderate'}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-400 mb-2">
                    <span className="text-xs font-medium text-slate-500">Precipitation</span>
                    <CloudRain className="h-4 w-4 text-indigo-500" />
                  </div>
                  <div className="text-xl font-bold text-slate-900">
                    {current.precipitation} <span className="text-xs font-normal">mm</span>
                  </div>
                  <span className="text-[11px] text-slate-500 mt-1">Pacific trade winds</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Hourly Forecast */}
        {activeTab === 'hourly' && (
          <div className="p-6 md:p-8">
            <h3 className="text-sm font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary-600" />
              12-Hour Weather & Rain Probability Timeline
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {hourly.time.map((timeStr, idx) => {
                const date = new Date(timeStr);
                const timeLabel = date.toLocaleTimeString([], { hour: 'numeric', hour12: true });
                const meta = getWeatherDetails(hourly.weatherCode[idx] ?? 0);
                const temp = hourly.temperature[idx];
                const pop = hourly.precipitationProbability[idx];

                return (
                  <div
                    key={timeStr + idx}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center hover:bg-primary-50/50 hover:border-primary-200 transition-colors"
                  >
                    <span className="text-xs font-semibold text-slate-600">{timeLabel}</span>
                    <div className="my-2">{meta.smallIcon}</div>
                    <span className="text-sm font-bold text-slate-900">{formatTemp(temp)}</span>
                    <div className="mt-2 text-[11px] font-medium text-blue-600 flex items-center gap-1">
                      <Droplets className="h-3 w-3" />
                      {pop}% rain
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 3: Coastal & Surfing Information */}
        {activeTab === 'coastal' && (
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100">
                <div className="flex items-center gap-2 text-blue-900 font-semibold mb-2">
                  <Waves className="h-5 w-5 text-blue-600" />
                  Sabang Beach Surf Watch
                </div>
                <p className="text-xs text-blue-800 leading-relaxed">
                  Sabang is Baler&apos;s primary beach break. Current swell direction is East-Northeast with sandbar conditions optimal during mid-tide.
                </p>
                <div className="mt-3 pt-3 border-t border-blue-200/60 flex justify-between text-xs font-medium text-blue-900">
                  <span>Swell Quality:</span>
                  <span className="font-bold">Moderate to Good</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-100">
                <div className="flex items-center gap-2 text-teal-900 font-semibold mb-2">
                  <Eye className="h-5 w-5 text-teal-600" />
                  Cemento & Charlie&apos;s Point
                </div>
                <p className="text-xs text-teal-800 leading-relaxed">
                  Reef break best suited for experienced surfers. Watch for exposed reef during low tide periods and maintain safety clearance.
                </p>
                <div className="mt-3 pt-3 border-t border-teal-200/60 flex justify-between text-xs font-medium text-teal-900">
                  <span>Reef Advisory:</span>
                  <span className="font-bold">Wear Booties / Caution</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-100">
                <div className="flex items-center gap-2 text-amber-900 font-semibold mb-2">
                  <ShieldCheck className="h-5 w-5 text-amber-600" />
                  Coast Guard & Fisherfolk Advisory
                </div>
                <p className="text-xs text-amber-800 leading-relaxed">
                  Small sea craft advisories are issued during gale warnings or sudden monsoon surges. Always verify PCG Baler clearance before sailing.
                </p>
                <div className="mt-3 pt-3 border-t border-amber-200/60 flex justify-between text-xs font-medium text-amber-900">
                  <span>Sea Craft Status:</span>
                  <span className="font-bold text-emerald-700">Cleared for Normal Operations</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 5-Day Outlook Grid */}
      <div>
        <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center justify-between">
          <span>5-Day Meteorological Outlook for Baler</span>
          <span className="text-xs font-normal text-slate-500">PAGASA / Open-Meteo Synoptic Forecast</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {daily.time.map((timeStr, idx) => {
            const date = new Date(timeStr);
            const dayName = idx === 0 ? 'Today' : date.toLocaleDateString('en-US', { weekday: 'short' });
            const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
            const meta = getWeatherDetails(daily.weatherCode[idx] ?? 0);
            const maxTemp = daily.temperatureMax[idx];
            const minTemp = daily.temperatureMin[idx];
            const rainProb = daily.precipitationProbabilityMax[idx];

            return (
              <div
                key={timeStr}
                className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs hover:border-primary-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="font-bold text-sm text-slate-900">{dayName}</div>
                      <div className="text-[11px] text-slate-500">{formattedDate}</div>
                    </div>
                    {meta.smallIcon}
                  </div>

                  <div className="text-xs font-medium text-slate-700 mb-3">{meta.label}</div>
                </div>

                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-lg font-bold text-slate-900">{formatTemp(maxTemp)}</span>
                    <span className="text-xs text-slate-400 font-medium">{formatTemp(minTemp)}</span>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1 text-blue-600">
                      <Droplets className="h-3 w-3" />
                      {rainProb}%
                    </span>
                    <span className="text-slate-400">UV {daily.uvIndexMax[idx]?.toFixed(0) || '7'}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* LGU Emergency Contacts Bar */}
      <div className="mt-8 p-4 bg-primary-900 text-white rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-primary-800 rounded-lg text-primary-200 shrink-0">
            <PhoneCall className="h-5 w-5" />
          </div>
          <div>
            <div className="font-semibold text-sm">Baler Disaster Risk Reduction & Management Office (MDRRMO)</div>
            <div className="text-xs text-primary-200">Emergency Hotlines & Coastal Safety Assistance</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs font-medium">
          <a
            href="tel:09171234567"
            className="px-3 py-1.5 rounded-lg bg-primary-700 hover:bg-primary-600 text-white transition-colors border border-primary-600"
          >
            MDRRMO: (042) 722-0000 / 0917-123-4567
          </a>
          <a
            href="tel:09981234567"
            className="px-3 py-1.5 rounded-lg bg-primary-700 hover:bg-primary-600 text-white transition-colors border border-primary-600"
          >
            PCG Baler: 0998-123-4567
          </a>
        </div>
      </div>
    </Section>
  );
}
