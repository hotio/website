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
<tr><td><div id="tag7035" onclick="CopyToClipboard('tag7035');return false;" class="tag-decoration">nightly</div><div id="tag4803" onclick="CopyToClipboard('tag4803');return false;" class="tag-decoration">nightly-0beb1e1</div><div id="tag13625" onclick="CopyToClipboard('tag13625');return false;" class="tag-decoration">nightly-777db2015828fca63582d21b0e756fae21c1d80e</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/0beb1e1312a30af309e2ea972b31d743803c057b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27354556217" target="_blank">2026-06-11 14:35:21</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11236" onclick="CopyToClipboard('tag11236');return false;" class="tag-decoration">release</div><div id="tag27961" onclick="CopyToClipboard('tag27961');return false;" class="tag-decoration">release-b9b0219</div><div id="tag27384" onclick="CopyToClipboard('tag27384');return false;" class="tag-decoration">release-5.0.3</div><div id="tag8081" onclick="CopyToClipboard('tag8081');return false;" class="tag-decoration">release-v5</div><div id="tag22240" onclick="CopyToClipboard('tag22240');return false;" class="tag-decoration">release-v5.0</div><div id="tag250" onclick="CopyToClipboard('tag250');return false;" class="tag-decoration">release-v5.0.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/b9b02190bdad5c1cb5a1c9f439eb4d0c5236057f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27280225359" target="_blank">2026-06-10 13:36:55</a></td></tr>
<tr><td><div id="tag28519" onclick="CopyToClipboard('tag28519');return false;" class="tag-decoration">testing</div><div id="tag18748" onclick="CopyToClipboard('tag18748');return false;" class="tag-decoration">testing-2703dc2</div><div id="tag9685" onclick="CopyToClipboard('tag9685');return false;" class="tag-decoration">testing-5.0.4RC1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/2703dc28bdbac36a8721d614baa0393addc4f30b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27280224072" target="_blank">2026-06-10 13:36:54</a></td></tr>
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
