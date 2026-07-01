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
<tr><td><div id="tag12471" onclick="CopyToClipboard('tag12471');return false;" class="tag-decoration">nightly</div><div id="tag1226" onclick="CopyToClipboard('tag1226');return false;" class="tag-decoration">nightly-fd9ba98</div><div id="tag18586" onclick="CopyToClipboard('tag18586');return false;" class="tag-decoration">nightly-ee8d9bdcf94e9faf857fdfb5654ca0026ed51617</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/fd9ba98149a795c09c23928db0b5784ab33373e9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/28543789410" target="_blank">2026-07-01 19:53:07</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5516" onclick="CopyToClipboard('tag5516');return false;" class="tag-decoration">release</div><div id="tag23980" onclick="CopyToClipboard('tag23980');return false;" class="tag-decoration">release-2dd34ce</div><div id="tag4504" onclick="CopyToClipboard('tag4504');return false;" class="tag-decoration">release-5.0.4</div><div id="tag29286" onclick="CopyToClipboard('tag29286');return false;" class="tag-decoration">release-v5</div><div id="tag28540" onclick="CopyToClipboard('tag28540');return false;" class="tag-decoration">release-v5.0</div><div id="tag23178" onclick="CopyToClipboard('tag23178');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/2dd34ceefd0fcb9d9b5ed494cfa6f23888f5d3cc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/28443082106" target="_blank">2026-06-30 12:07:33</a></td></tr>
<tr><td><div id="tag8453" onclick="CopyToClipboard('tag8453');return false;" class="tag-decoration">testing</div><div id="tag8714" onclick="CopyToClipboard('tag8714');return false;" class="tag-decoration">testing-7eb9b92</div><div id="tag27998" onclick="CopyToClipboard('tag27998');return false;" class="tag-decoration">testing-5.1.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/7eb9b928e35c5d4a37c3cdfd9802bb0cdd52b9e0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/28443081600" target="_blank">2026-06-30 12:07:34</a></td></tr>
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
