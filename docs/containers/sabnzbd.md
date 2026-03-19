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
<tr><td><div id="tag10071" onclick="CopyToClipboard('tag10071');return false;" class="tag-decoration">nightly</div><div id="tag24770" onclick="CopyToClipboard('tag24770');return false;" class="tag-decoration">nightly-6ee4e77</div><div id="tag8598" onclick="CopyToClipboard('tag8598');return false;" class="tag-decoration">nightly-449157e0fb9d8996d3b4378efee2503e7475cdb4</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/6ee4e779f897078c3f438e4f14962bfd2ce15d7a" target="_blank">Version update: 89b3b97093390ec29cb89ec9fabeee25cb615dc2 => 449157e0fb9d8996d3b4378efee2503e7475cdb4</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/23318552719" target="_blank">2026-03-19 21:49:07</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14633" onclick="CopyToClipboard('tag14633');return false;" class="tag-decoration">release</div><div id="tag11875" onclick="CopyToClipboard('tag11875');return false;" class="tag-decoration">release-48d37cb</div><div id="tag21657" onclick="CopyToClipboard('tag21657');return false;" class="tag-decoration">release-4.5.5</div><div id="tag9802" onclick="CopyToClipboard('tag9802');return false;" class="tag-decoration">release-v4</div><div id="tag20686" onclick="CopyToClipboard('tag20686');return false;" class="tag-decoration">release-v4.5</div><div id="tag31599" onclick="CopyToClipboard('tag31599');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/48d37cb3372619463a25e66c0e4e9e4195bca12c" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/22292136862" target="_blank">2026-02-23 03:44:18</a></td></tr>
<tr><td><div id="tag24345" onclick="CopyToClipboard('tag24345');return false;" class="tag-decoration">testing</div><div id="tag17515" onclick="CopyToClipboard('tag17515');return false;" class="tag-decoration">testing-486df6c</div><div id="tag31680" onclick="CopyToClipboard('tag31680');return false;" class="tag-decoration">testing-5.0.0Beta3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/486df6cc6e9218b701e538b44bc39edf8224dcff" target="_blank">Version update: 5.0.0Beta2 => 5.0.0Beta3</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/23047220296" target="_blank">2026-03-13 10:42:44</a></td></tr>
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
