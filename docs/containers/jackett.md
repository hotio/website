---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7326" onclick="CopyToClipboard('tag7326');return false;" class="tag-decoration">release</div><div id="tag22876" onclick="CopyToClipboard('tag22876');return false;" class="tag-decoration">release-0.24.766</div><div id="tag29928" onclick="CopyToClipboard('tag29928');return false;" class="tag-decoration">release-eecf7b4</div><div id="tag21364" onclick="CopyToClipboard('tag21364');return false;" class="tag-decoration">release-v0</div><div id="tag32508" onclick="CopyToClipboard('tag32508');return false;" class="tag-decoration">release-v0.24</div><div id="tag28378" onclick="CopyToClipboard('tag28378');return false;" class="tag-decoration">release-v0.24.766</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/eecf7b4dd1f1b21180085eefae81d9d02cd869fd" target="_blank">Version update: 0.24.752 => 0.24.766</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/20808244665" target="_blank">2026-01-08 06:48:16</a></td></tr>
<tr><td><div id="tag8380" onclick="CopyToClipboard('tag8380');return false;" class="tag-decoration">testing</div><div id="tag28950" onclick="CopyToClipboard('tag28950');return false;" class="tag-decoration">testing-0.24.766</div><div id="tag8708" onclick="CopyToClipboard('tag8708');return false;" class="tag-decoration">testing-3bbce3f</div><div id="tag6317" onclick="CopyToClipboard('tag6317');return false;" class="tag-decoration">testing-v0</div><div id="tag1268" onclick="CopyToClipboard('tag1268');return false;" class="tag-decoration">testing-v0.24</div><div id="tag5655" onclick="CopyToClipboard('tag5655');return false;" class="tag-decoration">testing-v0.24.766</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/3bbce3f568c744a446eccc3743ecc2df11be4bca" target="_blank">Version update: 0.24.752 => 0.24.766</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/20808245238" target="_blank">2026-01-08 06:48:19</a></td></tr>
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
