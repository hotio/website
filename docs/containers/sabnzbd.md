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
<tr><td><div id="tag7070" onclick="CopyToClipboard('tag7070');return false;" class="tag-decoration">nightly</div><div id="tag13530" onclick="CopyToClipboard('tag13530');return false;" class="tag-decoration">nightly-104444f</div><div id="tag30575" onclick="CopyToClipboard('tag30575');return false;" class="tag-decoration">nightly-988955374c9cadd667335d1a0e6f823deb4c77c4</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/104444f94d15678ea8e31380378b2d72692f6919" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29228500864" target="_blank">2026-07-13 06:16:25</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31301" onclick="CopyToClipboard('tag31301');return false;" class="tag-decoration">release</div><div id="tag24105" onclick="CopyToClipboard('tag24105');return false;" class="tag-decoration">release-87cf11e</div><div id="tag23022" onclick="CopyToClipboard('tag23022');return false;" class="tag-decoration">release-5.0.4</div><div id="tag12005" onclick="CopyToClipboard('tag12005');return false;" class="tag-decoration">release-v5</div><div id="tag2195" onclick="CopyToClipboard('tag2195');return false;" class="tag-decoration">release-v5.0</div><div id="tag15115" onclick="CopyToClipboard('tag15115');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/87cf11e3a66915f67f40d8808a80017823bb519b" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/28981862234" target="_blank">2026-07-08 23:05:37</a></td></tr>
<tr><td><div id="tag26550" onclick="CopyToClipboard('tag26550');return false;" class="tag-decoration">testing</div><div id="tag20235" onclick="CopyToClipboard('tag20235');return false;" class="tag-decoration">testing-79fbc9b</div><div id="tag16641" onclick="CopyToClipboard('tag16641');return false;" class="tag-decoration">testing-5.1.0Beta3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/79fbc9be834befb47221d04189d62edbc13501f9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29099614759" target="_blank">2026-07-10 14:23:11</a></td></tr>
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
