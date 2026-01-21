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
<tr><td><div id="tag5740" onclick="CopyToClipboard('tag5740');return false;" class="tag-decoration">nightly</div><div id="tag31361" onclick="CopyToClipboard('tag31361');return false;" class="tag-decoration">nightly-3fba77b</div><div id="tag10622" onclick="CopyToClipboard('tag10622');return false;" class="tag-decoration">nightly-eff5f663abd1680e0d303be4cce21e0a9d1bc74d</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/3fba77bab3373a780ce1ff958c97aacef14b17ce" target="_blank">Upstream update: alpinevpn-7a36f80 => alpinevpn-1d9f62f</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21198605005" target="_blank">2026-01-21 05:37:58</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22900" onclick="CopyToClipboard('tag22900');return false;" class="tag-decoration">release</div><div id="tag29753" onclick="CopyToClipboard('tag29753');return false;" class="tag-decoration">release-4e14703</div><div id="tag16945" onclick="CopyToClipboard('tag16945');return false;" class="tag-decoration">release-4.5.5</div><div id="tag24090" onclick="CopyToClipboard('tag24090');return false;" class="tag-decoration">release-v4</div><div id="tag9688" onclick="CopyToClipboard('tag9688');return false;" class="tag-decoration">release-v4.5</div><div id="tag30758" onclick="CopyToClipboard('tag30758');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/4e14703790120aaefbd9b56b3b7aed0ebc40afa2" target="_blank">Upstream update: alpinevpn-7a36f80 => alpinevpn-1d9f62f</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21198605444" target="_blank">2026-01-21 05:38:00</a></td></tr>
<tr><td><div id="tag4618" onclick="CopyToClipboard('tag4618');return false;" class="tag-decoration">testing</div><div id="tag30022" onclick="CopyToClipboard('tag30022');return false;" class="tag-decoration">testing-fc79d2a</div><div id="tag19293" onclick="CopyToClipboard('tag19293');return false;" class="tag-decoration">testing-4.6.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/fc79d2a64fe2f7f3e465108b1385cb038268b90d" target="_blank">Upstream update: alpinevpn-7a36f80 => alpinevpn-1d9f62f</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21198606212" target="_blank">2026-01-21 05:38:02</a></td></tr>
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
