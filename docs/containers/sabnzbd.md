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
<tr><td><div id="tag2364" onclick="CopyToClipboard('tag2364');return false;" class="tag-decoration">nightly</div><div id="tag10973" onclick="CopyToClipboard('tag10973');return false;" class="tag-decoration">nightly-70be57b</div><div id="tag2735" onclick="CopyToClipboard('tag2735');return false;" class="tag-decoration">nightly-90798e5e4dcbd2e45bc0aa36f95de482e08b8cea</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/70be57b9371f9fef6d27c0df33a18d2789aefdfd" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25714977718" target="_blank">2026-05-12 05:17:21</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8501" onclick="CopyToClipboard('tag8501');return false;" class="tag-decoration">release</div><div id="tag10835" onclick="CopyToClipboard('tag10835');return false;" class="tag-decoration">release-95064dd</div><div id="tag8054" onclick="CopyToClipboard('tag8054');return false;" class="tag-decoration">release-5.0.1</div><div id="tag5508" onclick="CopyToClipboard('tag5508');return false;" class="tag-decoration">release-v5</div><div id="tag3329" onclick="CopyToClipboard('tag3329');return false;" class="tag-decoration">release-v5.0</div><div id="tag904" onclick="CopyToClipboard('tag904');return false;" class="tag-decoration">release-v5.0.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/95064dd1df88153c4e32b886ea09f313c1eb15a9" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25708441680" target="_blank">2026-05-12 01:53:15</a></td></tr>
<tr><td><div id="tag27272" onclick="CopyToClipboard('tag27272');return false;" class="tag-decoration">testing</div><div id="tag19356" onclick="CopyToClipboard('tag19356');return false;" class="tag-decoration">testing-addd38c</div><div id="tag30012" onclick="CopyToClipboard('tag30012');return false;" class="tag-decoration">testing-5.0.2RC1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/addd38ca7f5a2ddf81e235e71ebc463ace766a7f" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25708444432" target="_blank">2026-05-12 01:53:20</a></td></tr>
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
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

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
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
