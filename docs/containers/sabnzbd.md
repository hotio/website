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
<tr><td><div id="tag27478" onclick="CopyToClipboard('tag27478');return false;" class="tag-decoration">nightly</div><div id="tag9931" onclick="CopyToClipboard('tag9931');return false;" class="tag-decoration">nightly-b3159c2</div><div id="tag12899" onclick="CopyToClipboard('tag12899');return false;" class="tag-decoration">nightly-d167fb0fe7e8164f67edf1520a92360a766c7f9a</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/b3159c2cda75d70c88429a34826fab1381f2b9f2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/30791922741" target="_blank">2026-08-03 06:57:56</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28388" onclick="CopyToClipboard('tag28388');return false;" class="tag-decoration">release</div><div id="tag19581" onclick="CopyToClipboard('tag19581');return false;" class="tag-decoration">release-b5245d7</div><div id="tag31646" onclick="CopyToClipboard('tag31646');return false;" class="tag-decoration">release-5.0.4</div><div id="tag19585" onclick="CopyToClipboard('tag19585');return false;" class="tag-decoration">release-v5</div><div id="tag31148" onclick="CopyToClipboard('tag31148');return false;" class="tag-decoration">release-v5.0</div><div id="tag21975" onclick="CopyToClipboard('tag21975');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/b5245d7225070a8fa2cfeb17d67ef0e89bb66136" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/30372822483" target="_blank">2026-07-28 15:19:45</a></td></tr>
<tr><td><div id="tag22435" onclick="CopyToClipboard('tag22435');return false;" class="tag-decoration">testing</div><div id="tag17475" onclick="CopyToClipboard('tag17475');return false;" class="tag-decoration">testing-53db5a7</div><div id="tag14412" onclick="CopyToClipboard('tag14412');return false;" class="tag-decoration">testing-5.1.0RC1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/53db5a7cb13bcab6279fac2eeb0452e43f9a5288" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/30372825056" target="_blank">2026-07-28 15:19:47</a></td></tr>
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
