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
<tr><td><div id="tag23755" onclick="CopyToClipboard('tag23755');return false;" class="tag-decoration">nightly</div><div id="tag30475" onclick="CopyToClipboard('tag30475');return false;" class="tag-decoration">nightly-87f64c9</div><div id="tag25456" onclick="CopyToClipboard('tag25456');return false;" class="tag-decoration">nightly-ef2ee17c135c313e12c74455a0472edbae711e79</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/87f64c9d1b858480fa5d3e0a295b85b68b41aa4f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29316564419" target="_blank">2026-07-14 08:01:37</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30909" onclick="CopyToClipboard('tag30909');return false;" class="tag-decoration">release</div><div id="tag31690" onclick="CopyToClipboard('tag31690');return false;" class="tag-decoration">release-163861a</div><div id="tag20684" onclick="CopyToClipboard('tag20684');return false;" class="tag-decoration">release-5.0.4</div><div id="tag13333" onclick="CopyToClipboard('tag13333');return false;" class="tag-decoration">release-v5</div><div id="tag15892" onclick="CopyToClipboard('tag15892');return false;" class="tag-decoration">release-v5.0</div><div id="tag644" onclick="CopyToClipboard('tag644');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/163861ae1d121a11a1450c0c61eaac7976a75674" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29316569342" target="_blank">2026-07-14 08:01:42</a></td></tr>
<tr><td><div id="tag5312" onclick="CopyToClipboard('tag5312');return false;" class="tag-decoration">testing</div><div id="tag7347" onclick="CopyToClipboard('tag7347');return false;" class="tag-decoration">testing-3a5323b</div><div id="tag10956" onclick="CopyToClipboard('tag10956');return false;" class="tag-decoration">testing-5.1.0Beta3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/3a5323b13ed1f8df3f2110a53c42fe1fd4bf0012" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29316563548" target="_blank">2026-07-14 08:01:36</a></td></tr>
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
