---
hide:
  - toc
title: hotio/unpackerr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/unpackerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/davidnewhall/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
<tr><td><div id="tag32718" onclick="CopyToClipboard('tag32718');return false;" class="tag-decoration">nightly</div><div id="tag27991" onclick="CopyToClipboard('tag27991');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div><div id="tag20002" onclick="CopyToClipboard('tag20002');return false;" class="tag-decoration">nightly-0e7c697</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/0e7c697e450438e1f7c1be62a9ac09eb0b635c5c" target="_blank">Upstream update: alpinevpn-30708ff => alpinevpn-c1be17f</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20845772310" target="_blank">2026-01-09 08:22:49</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31314" onclick="CopyToClipboard('tag31314');return false;" class="tag-decoration">release</div><div id="tag22410" onclick="CopyToClipboard('tag22410');return false;" class="tag-decoration">release-0.14.5</div><div id="tag114" onclick="CopyToClipboard('tag114');return false;" class="tag-decoration">release-48a8ad9</div><div id="tag32289" onclick="CopyToClipboard('tag32289');return false;" class="tag-decoration">release-v0</div><div id="tag9866" onclick="CopyToClipboard('tag9866');return false;" class="tag-decoration">release-v0.14</div><div id="tag21817" onclick="CopyToClipboard('tag21817');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/48a8ad9f4e633cddcd722d71d36cf56d7e4efc80" target="_blank">Upstream update: null => alpinevpn-30708ff</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20842482201" target="_blank">2026-01-09 05:41:18</a></td></tr>
<tr><td><div id="tag15979" onclick="CopyToClipboard('tag15979');return false;" class="tag-decoration">testing</div><div id="tag9045" onclick="CopyToClipboard('tag9045');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag12914" onclick="CopyToClipboard('tag12914');return false;" class="tag-decoration">testing-6ced8e0</div><div id="tag19991" onclick="CopyToClipboard('tag19991');return false;" class="tag-decoration">testing-v0</div><div id="tag8256" onclick="CopyToClipboard('tag8256');return false;" class="tag-decoration">testing-v0.14</div><div id="tag29558" onclick="CopyToClipboard('tag29558');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/6ced8e0523c16581e4db7f7e83f8010d2aebdb39" target="_blank">Upstream update: alpinevpn-30708ff => alpinevpn-c1be17f</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20845772975" target="_blank">2026-01-09 08:22:51</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="unpackerr" \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/unpackerr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      unpackerr:
        container_name: unpackerr
        image: ghcr.io/hotio/unpackerr
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

## Configuration

You can use docker environment variables or a configuration file that should be stored in `/config/unpackerr.conf`. Take a look at the [upstream](https://github.com/davidnewhall/unpackerr){ target="_blank" rel="noopener" } project page for info on how to configure Unpackerr.

--8<-- "includes/wireguard.md"
