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
<tr><td><div id="tag3798" onclick="CopyToClipboard('tag3798');return false;" class="tag-decoration">nightly</div><div id="tag26673" onclick="CopyToClipboard('tag26673');return false;" class="tag-decoration">nightly-644f5f5</div><div id="tag7968" onclick="CopyToClipboard('tag7968');return false;" class="tag-decoration">nightly-4d9d9953d4315b27e61d083909de36888e8fc8db</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/644f5f5b60f3416fdca1741e2437c32aed00f7eb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/45327598922" target="_blank">2026-11-24 04:36:45</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7127" onclick="CopyToClipboard('tag7127');return false;" class="tag-decoration">release</div><div id="tag17866" onclick="CopyToClipboard('tag17866');return false;" class="tag-decoration">release-0f6cdf6</div><div id="tag589" onclick="CopyToClipboard('tag589');return false;" class="tag-decoration">release-5.1.3</div><div id="tag17583" onclick="CopyToClipboard('tag17583');return false;" class="tag-decoration">release-v5</div><div id="tag18032" onclick="CopyToClipboard('tag18032');return false;" class="tag-decoration">release-v5.1</div><div id="tag6245" onclick="CopyToClipboard('tag6245');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/0f6cdf6d6d0a668d6874e252f6984d9771ef4f07" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/45426488147" target="_blank">2026-11-24 15:31:22</a></td></tr>
<tr><td><div id="tag7758" onclick="CopyToClipboard('tag7758');return false;" class="tag-decoration">testing</div><div id="tag496" onclick="CopyToClipboard('tag496');return false;" class="tag-decoration">testing-3cc5c83</div><div id="tag17811" onclick="CopyToClipboard('tag17811');return false;" class="tag-decoration">testing-5.2.0RC2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/3cc5c837c3beca265a690d1b190926fd539955ea" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/45327597288" target="_blank">2026-11-24 04:36:44</a></td></tr>
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
