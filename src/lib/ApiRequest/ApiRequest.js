import React, { Component } from 'react';
import { SpotifyApiContext } from '../../';
import PropTypes from 'prop-types';
import axios from 'axios';

// function ApiRequest(props) {
//   const [data, setData] = React.useState(null);
//   const [loading, setLoading] = React.useState(true);
//   const [error, setError] = React.useState(false);
//   const token = React.useContext(SpotifyApiContext);
//   React.useEffect(() => {
//     console.log('REACT-SPOTIFY-API UPDATE - FETCHING DATA');
//     axios
//       .get(props.url, {
//         params: props.options,
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       })
//       .then(res => {
//         setData(res.data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.log(err);
//         setError(true);
//       });
//   }, [props.url, props.options]);
//   return props.children(data, loading, error);
// }

// ApiRequest.propTypes = {
//   options: PropTypes.object,
//   url: PropTypes.string.isRequired,
//   token: PropTypes.string.isRequired,
//   children: PropTypes.func.isRequired
// };

// export default ApiRequest;

class ApiRequest extends Component {
    static propTypes = {
        options: PropTypes.object,
        url: PropTypes.string.isRequired,
        token: PropTypes.string.isRequired,
        children: PropTypes.func.isRequired
    };

    state = {
        data: null,
        loading: true,
        error: false
    };

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.url !== this.props.url ||
            (prevProps.options &&
                this.props.options &&
                prevProps.options.type &&
                this.props.options.type &&
                prevProps.options.type !== this.props.options.type) ||
            (prevProps.options &&
                this.props.options &&
                prevProps.options.q &&
                this.props.options.q &&
                prevProps.options.q !== this.props.options.q)
        ) {
            this.fetchData();
        }
    }

    fetchData = () => {
        console.log('REACT-SPOTIFY-API UPDATE - FETCHING DATA');
        axios
            .get(this.props.url, {
                params: this.props.options,
                headers: {
                    Authorization: `Bearer ${this.props.token}`
                }
            })
            .then(res => {
                this.setState({ data: res.data, loading: false });
            })
            .catch(err => {
                console.log(err);
                this.setState({ error: true });
            });
    };

    render() {
        return this.props.children(
            this.state.data,
            this.state.loading,
            this.state.error
        );
    }
}

export default ApiRequest;
