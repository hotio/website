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
<tr><td><div id="tag321" onclick="CopyToClipboard('tag321');return false;" class="tag-decoration">nightly</div><div id="tag15569" onclick="CopyToClipboard('tag15569');return false;" class="tag-decoration">nightly-ec42408</div><div id="tag13731" onclick="CopyToClipboard('tag13731');return false;" class="tag-decoration">nightly-196a92550cb4a461433b28f14f181dc6555bef92</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/ec42408a78942fedf09e2fb276fe52995e4d6cbe" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/26022954163" target="_blank">2026-05-18 08:43:39</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9422" onclick="CopyToClipboard('tag9422');return false;" class="tag-decoration">release</div><div id="tag32615" onclick="CopyToClipboard('tag32615');return false;" class="tag-decoration">release-21aa4cc</div><div id="tag754" onclick="CopyToClipboard('tag754');return false;" class="tag-decoration">release-5.0.3</div><div id="tag435" onclick="CopyToClipboard('tag435');return false;" class="tag-decoration">release-v5</div><div id="tag7203" onclick="CopyToClipboard('tag7203');return false;" class="tag-decoration">release-v5.0</div><div id="tag6838" onclick="CopyToClipboard('tag6838');return false;" class="tag-decoration">release-v5.0.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/21aa4ccd214526139f4487c79b0e04414bc85c5d" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25986626583" target="_blank">2026-05-17 09:04:51</a></td></tr>
<tr><td><div id="tag23970" onclick="CopyToClipboard('tag23970');return false;" class="tag-decoration">testing</div><div id="tag20112" onclick="CopyToClipboard('tag20112');return false;" class="tag-decoration">testing-2b94a3d</div><div id="tag9264" onclick="CopyToClipboard('tag9264');return false;" class="tag-decoration">testing-5.0.3</div><div id="tag29199" onclick="CopyToClipboard('tag29199');return false;" class="tag-decoration">testing-v5</div><div id="tag20341" onclick="CopyToClipboard('tag20341');return false;" class="tag-decoration">testing-v5.0</div><div id="tag10769" onclick="CopyToClipboard('tag10769');return false;" class="tag-decoration">testing-v5.0.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/2b94a3d3acb027ec09d6d8e0b707e9568705b72e" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25986626347" target="_blank">2026-05-17 09:04:50</a></td></tr>
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
