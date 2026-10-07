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
<tr><td><div id="tag32055" onclick="CopyToClipboard('tag32055');return false;" class="tag-decoration">nightly</div><div id="tag24283" onclick="CopyToClipboard('tag24283');return false;" class="tag-decoration">nightly-2a9f408</div><div id="tag28308" onclick="CopyToClipboard('tag28308');return false;" class="tag-decoration">nightly-cbda9451bb3c4143fa4d9d5c1c2b1ab8e5eb3d4d</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/2a9f4082596da8880acafaaf22b3725dcbffe89b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/37507568475" target="_blank">2026-10-06 17:57:27</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12782" onclick="CopyToClipboard('tag12782');return false;" class="tag-decoration">release</div><div id="tag27080" onclick="CopyToClipboard('tag27080');return false;" class="tag-decoration">release-4ade2e0</div><div id="tag9350" onclick="CopyToClipboard('tag9350');return false;" class="tag-decoration">release-5.1.3</div><div id="tag22486" onclick="CopyToClipboard('tag22486');return false;" class="tag-decoration">release-v5</div><div id="tag8441" onclick="CopyToClipboard('tag8441');return false;" class="tag-decoration">release-v5.1</div><div id="tag9560" onclick="CopyToClipboard('tag9560');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/4ade2e06064ce49c5f7609289882fe2fed03af47" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/37507564156" target="_blank">2026-10-06 17:57:27</a></td></tr>
<tr><td><div id="tag15130" onclick="CopyToClipboard('tag15130');return false;" class="tag-decoration">testing</div><div id="tag27340" onclick="CopyToClipboard('tag27340');return false;" class="tag-decoration">testing-bb6a9e4</div><div id="tag23893" onclick="CopyToClipboard('tag23893');return false;" class="tag-decoration">testing-5.2.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/bb6a9e476f5efe78eb544921eac2f211be81449b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/37560337319" target="_blank">2026-10-07 02:05:55</a></td></tr>
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
