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
<tr><td><div id="tag3355" onclick="CopyToClipboard('tag3355');return false;" class="tag-decoration">nightly</div><div id="tag21934" onclick="CopyToClipboard('tag21934');return false;" class="tag-decoration">nightly-152452e</div><div id="tag32542" onclick="CopyToClipboard('tag32542');return false;" class="tag-decoration">nightly-e3e7fcf361eaebec2d76397b3d27f854f8266410</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/152452e51c505c63cdd8f21dc27b88ec20a06dcc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/28337420174" target="_blank">2026-06-28 22:00:59</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag677" onclick="CopyToClipboard('tag677');return false;" class="tag-decoration">release</div><div id="tag52" onclick="CopyToClipboard('tag52');return false;" class="tag-decoration">release-f242b9f</div><div id="tag29599" onclick="CopyToClipboard('tag29599');return false;" class="tag-decoration">release-5.0.4</div><div id="tag5780" onclick="CopyToClipboard('tag5780');return false;" class="tag-decoration">release-v5</div><div id="tag20337" onclick="CopyToClipboard('tag20337');return false;" class="tag-decoration">release-v5.0</div><div id="tag634" onclick="CopyToClipboard('tag634');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/f242b9fd1f72aaa4fa3dabd9a872d8497eab7f11" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27986957234" target="_blank">2026-06-22 22:01:06</a></td></tr>
<tr><td><div id="tag23241" onclick="CopyToClipboard('tag23241');return false;" class="tag-decoration">testing</div><div id="tag5553" onclick="CopyToClipboard('tag5553');return false;" class="tag-decoration">testing-f996a49</div><div id="tag22052" onclick="CopyToClipboard('tag22052');return false;" class="tag-decoration">testing-5.1.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/f996a499b02aef97f934b3b2269cc1d639a2f1b9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/28247600377" target="_blank">2026-06-26 15:22:49</a></td></tr>
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
