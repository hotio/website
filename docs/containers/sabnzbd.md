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
<tr><td><div id="tag840" onclick="CopyToClipboard('tag840');return false;" class="tag-decoration">nightly</div><div id="tag7916" onclick="CopyToClipboard('tag7916');return false;" class="tag-decoration">nightly-7207491</div><div id="tag5218" onclick="CopyToClipboard('tag5218');return false;" class="tag-decoration">nightly-998766e7f81ea061179776299ffe6ab7f0ab2eba</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/72074913c2964c97a9b3230d47d393a0648cc820" target="_blank">Version update: 5d4d5121082fed7bba7589709795fd1450cb5275 => 998766e7f81ea061179776299ffe6ab7f0ab2eba</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/23938630776" target="_blank">2026-04-03 07:44:31</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9417" onclick="CopyToClipboard('tag9417');return false;" class="tag-decoration">release</div><div id="tag18029" onclick="CopyToClipboard('tag18029');return false;" class="tag-decoration">release-48d37cb</div><div id="tag12070" onclick="CopyToClipboard('tag12070');return false;" class="tag-decoration">release-4.5.5</div><div id="tag8480" onclick="CopyToClipboard('tag8480');return false;" class="tag-decoration">release-v4</div><div id="tag22167" onclick="CopyToClipboard('tag22167');return false;" class="tag-decoration">release-v4.5</div><div id="tag9063" onclick="CopyToClipboard('tag9063');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/48d37cb3372619463a25e66c0e4e9e4195bca12c" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/22292136862" target="_blank">2026-02-23 03:44:18</a></td></tr>
<tr><td><div id="tag6522" onclick="CopyToClipboard('tag6522');return false;" class="tag-decoration">testing</div><div id="tag24284" onclick="CopyToClipboard('tag24284');return false;" class="tag-decoration">testing-a35c3b5</div><div id="tag17319" onclick="CopyToClipboard('tag17319');return false;" class="tag-decoration">testing-5.0.0RC1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/a35c3b5fed3d44ef245b6ecf7d926160e83b96e5" target="_blank">Version update: 5.0.0Beta4 => 5.0.0RC1</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/23737339906" target="_blank">2026-03-30 09:19:41</a></td></tr>
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
