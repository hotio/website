---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: docker.io](https://hub.docker.com/r/hotio/jackett/tags){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27481" onclick="CopyToClipboard('tag27481');return false;" class="tag-decoration">release</div><div id="tag23489" onclick="CopyToClipboard('tag23489');return false;" class="tag-decoration">release-0.24.790</div><div id="tag4476" onclick="CopyToClipboard('tag4476');return false;" class="tag-decoration">release-1906b0d</div><div id="tag12546" onclick="CopyToClipboard('tag12546');return false;" class="tag-decoration">release-v0</div><div id="tag30607" onclick="CopyToClipboard('tag30607');return false;" class="tag-decoration">release-v0.24</div><div id="tag30053" onclick="CopyToClipboard('tag30053');return false;" class="tag-decoration">release-v0.24.790</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/1906b0d5a80b5c7b497fb174cfd36721d96ea659" target="_blank">Upstream update: alpinevpn-c1be17f => alpinevpn-0904450</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/20850331013" target="_blank">2026-01-09 11:22:42</a></td></tr>
<tr><td><div id="tag28934" onclick="CopyToClipboard('tag28934');return false;" class="tag-decoration">testing</div><div id="tag10389" onclick="CopyToClipboard('tag10389');return false;" class="tag-decoration">testing-0.24.790</div><div id="tag22568" onclick="CopyToClipboard('tag22568');return false;" class="tag-decoration">testing-90a6988</div><div id="tag12576" onclick="CopyToClipboard('tag12576');return false;" class="tag-decoration">testing-v0</div><div id="tag29164" onclick="CopyToClipboard('tag29164');return false;" class="tag-decoration">testing-v0.24</div><div id="tag25802" onclick="CopyToClipboard('tag25802');return false;" class="tag-decoration">testing-v0.24.790</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/90a6988840c7d87dac0311df6fcba38cc380cfb1" target="_blank">Upstream update: alpinevpn-c1be17f => alpinevpn-0904450</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/20850331759" target="_blank">2026-01-09 11:22:44</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
    ```

--8<-- "includes/wireguard.md"
