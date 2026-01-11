---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag3660" onclick="CopyToClipboard('tag3660');return false;" class="tag-decoration">nightly</div><div id="tag2821" onclick="CopyToClipboard('tag2821');return false;" class="tag-decoration">nightly-df1c0915d07982546e282b2b52354a49cde993ba</div><div id="tag4165" onclick="CopyToClipboard('tag4165');return false;" class="tag-decoration">nightly-b1d3c04</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/b1d3c04dd5f7f9fd99bb37845d29fd57706dc43e" target="_blank">Upstream update: alpinevpn-5b650ae => alpinevpn-b4dc175</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20895146103" target="_blank">2026-01-11 12:29:18</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19517" onclick="CopyToClipboard('tag19517');return false;" class="tag-decoration">release</div><div id="tag25280" onclick="CopyToClipboard('tag25280');return false;" class="tag-decoration">release-4.5.5</div><div id="tag16597" onclick="CopyToClipboard('tag16597');return false;" class="tag-decoration">release-5fe1372</div><div id="tag13743" onclick="CopyToClipboard('tag13743');return false;" class="tag-decoration">release-v4</div><div id="tag19911" onclick="CopyToClipboard('tag19911');return false;" class="tag-decoration">release-v4.5</div><div id="tag32273" onclick="CopyToClipboard('tag32273');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/5fe13727e80942d58ff78783a93e465eea2eb5ef" target="_blank">Upstream update: alpinevpn-0904450 => alpinevpn-5b650ae</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20892089819" target="_blank">2026-01-11 08:19:58</a></td></tr>
<tr><td><div id="tag3169" onclick="CopyToClipboard('tag3169');return false;" class="tag-decoration">testing</div><div id="tag7218" onclick="CopyToClipboard('tag7218');return false;" class="tag-decoration">testing-4.6.0Beta2</div><div id="tag29175" onclick="CopyToClipboard('tag29175');return false;" class="tag-decoration">testing-68aaa3d</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/68aaa3d5e811d97774932733dca433c6e5d0015c" target="_blank">Upstream update: alpinevpn-0904450 => alpinevpn-5b650ae</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20892090106" target="_blank">2026-01-11 08:19:59</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

--8<-- "includes/wireguard.md"
