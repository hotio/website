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
<tr><td><div id="tag17714" onclick="CopyToClipboard('tag17714');return false;" class="tag-decoration">nightly</div><div id="tag27223" onclick="CopyToClipboard('tag27223');return false;" class="tag-decoration">nightly-3677447</div><div id="tag12152" onclick="CopyToClipboard('tag12152');return false;" class="tag-decoration">nightly-d215d4b0d7bb35b6fce90a0a96966a37a6f6a1fc</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/367744720eb2407bee068c70ebbd2aaadc67aa4a" target="_blank">Version update: eff5f663abd1680e0d303be4cce21e0a9d1bc74d => d215d4b0d7bb35b6fce90a0a96966a37a6f6a1fc</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21225215615" target="_blank">2026-01-21 20:49:27</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1626" onclick="CopyToClipboard('tag1626');return false;" class="tag-decoration">release</div><div id="tag27130" onclick="CopyToClipboard('tag27130');return false;" class="tag-decoration">release-8c742e6</div><div id="tag11002" onclick="CopyToClipboard('tag11002');return false;" class="tag-decoration">release-4.5.5</div><div id="tag10996" onclick="CopyToClipboard('tag10996');return false;" class="tag-decoration">release-v4</div><div id="tag27263" onclick="CopyToClipboard('tag27263');return false;" class="tag-decoration">release-v4.5</div><div id="tag22733" onclick="CopyToClipboard('tag22733');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/8c742e6bdd8b711a668fc7388274baa26211a63d" target="_blank">Upstream update: alpinevpn-2c8fbe3 => alpinevpn-6f109b5</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21237954891" target="_blank">2026-01-22 06:03:25</a></td></tr>
<tr><td><div id="tag11432" onclick="CopyToClipboard('tag11432');return false;" class="tag-decoration">testing</div><div id="tag2814" onclick="CopyToClipboard('tag2814');return false;" class="tag-decoration">testing-fa58da2</div><div id="tag6635" onclick="CopyToClipboard('tag6635');return false;" class="tag-decoration">testing-4.6.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/fa58da2f2442a5d828f94e657e541d08ddd3a73b" target="_blank">Upstream update: alpinevpn-2c8fbe3 => alpinevpn-6f109b5</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21237955433" target="_blank">2026-01-22 06:03:26</a></td></tr>
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
