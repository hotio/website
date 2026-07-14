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
<tr><td><div id="tag21327" onclick="CopyToClipboard('tag21327');return false;" class="tag-decoration">nightly</div><div id="tag4768" onclick="CopyToClipboard('tag4768');return false;" class="tag-decoration">nightly-dcf06b6</div><div id="tag32663" onclick="CopyToClipboard('tag32663');return false;" class="tag-decoration">nightly-44777dc3cf5bcebf175d9ee95c7e1965c4d714c8</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/dcf06b6efd0c12c5acc20e40c6e1aa0a12a815bc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29364645250" target="_blank">2026-07-14 20:09:59</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24578" onclick="CopyToClipboard('tag24578');return false;" class="tag-decoration">release</div><div id="tag6763" onclick="CopyToClipboard('tag6763');return false;" class="tag-decoration">release-163861a</div><div id="tag7143" onclick="CopyToClipboard('tag7143');return false;" class="tag-decoration">release-5.0.4</div><div id="tag4383" onclick="CopyToClipboard('tag4383');return false;" class="tag-decoration">release-v5</div><div id="tag22395" onclick="CopyToClipboard('tag22395');return false;" class="tag-decoration">release-v5.0</div><div id="tag26448" onclick="CopyToClipboard('tag26448');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/163861ae1d121a11a1450c0c61eaac7976a75674" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29316569342" target="_blank">2026-07-14 08:01:42</a></td></tr>
<tr><td><div id="tag18072" onclick="CopyToClipboard('tag18072');return false;" class="tag-decoration">testing</div><div id="tag1194" onclick="CopyToClipboard('tag1194');return false;" class="tag-decoration">testing-3a5323b</div><div id="tag15894" onclick="CopyToClipboard('tag15894');return false;" class="tag-decoration">testing-5.1.0Beta3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/3a5323b13ed1f8df3f2110a53c42fe1fd4bf0012" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29316563548" target="_blank">2026-07-14 08:01:36</a></td></tr>
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
