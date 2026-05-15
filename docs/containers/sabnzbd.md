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
<tr><td><div id="tag17217" onclick="CopyToClipboard('tag17217');return false;" class="tag-decoration">nightly</div><div id="tag19989" onclick="CopyToClipboard('tag19989');return false;" class="tag-decoration">nightly-78c53df</div><div id="tag23546" onclick="CopyToClipboard('tag23546');return false;" class="tag-decoration">nightly-60f555117c78466704bcb82b22cc5027944e8139</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/78c53df2cd8bc1f261dda6dfac7368590b03fa4a" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25925454688" target="_blank">2026-05-15 15:12:39</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7408" onclick="CopyToClipboard('tag7408');return false;" class="tag-decoration">release</div><div id="tag6424" onclick="CopyToClipboard('tag6424');return false;" class="tag-decoration">release-be92865</div><div id="tag19843" onclick="CopyToClipboard('tag19843');return false;" class="tag-decoration">release-5.0.2</div><div id="tag27132" onclick="CopyToClipboard('tag27132');return false;" class="tag-decoration">release-v5</div><div id="tag32201" onclick="CopyToClipboard('tag32201');return false;" class="tag-decoration">release-v5.0</div><div id="tag27342" onclick="CopyToClipboard('tag27342');return false;" class="tag-decoration">release-v5.0.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/be928655a6aeed558def2984ddad6880f650e756" target="_blank"></a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25916123789" target="_blank">2026-05-14 19:44:41</a></td></tr>
<tr><td><div id="tag5270" onclick="CopyToClipboard('tag5270');return false;" class="tag-decoration">testing</div><div id="tag5215" onclick="CopyToClipboard('tag5215');return false;" class="tag-decoration">testing-9310d80</div><div id="tag23157" onclick="CopyToClipboard('tag23157');return false;" class="tag-decoration">testing-5.0.2</div><div id="tag17657" onclick="CopyToClipboard('tag17657');return false;" class="tag-decoration">testing-v5</div><div id="tag17124" onclick="CopyToClipboard('tag17124');return false;" class="tag-decoration">testing-v5.0</div><div id="tag32281" onclick="CopyToClipboard('tag32281');return false;" class="tag-decoration">testing-v5.0.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/9310d801f03333b19288c81535db3c8e1cff99cc" target="_blank"></a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25916135982" target="_blank">2026-05-14 19:44:43</a></td></tr>
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
