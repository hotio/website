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
<tr><td><div id="tag16285" onclick="CopyToClipboard('tag16285');return false;" class="tag-decoration">nightly</div><div id="tag7130" onclick="CopyToClipboard('tag7130');return false;" class="tag-decoration">nightly-8986969</div><div id="tag28945" onclick="CopyToClipboard('tag28945');return false;" class="tag-decoration">nightly-ef2ee17c135c313e12c74455a0472edbae711e79</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/898696965c8730a75962774924cf895c5aa8ca26" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29242651286" target="_blank">2026-07-13 10:24:38</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23240" onclick="CopyToClipboard('tag23240');return false;" class="tag-decoration">release</div><div id="tag18325" onclick="CopyToClipboard('tag18325');return false;" class="tag-decoration">release-87cf11e</div><div id="tag21256" onclick="CopyToClipboard('tag21256');return false;" class="tag-decoration">release-5.0.4</div><div id="tag28175" onclick="CopyToClipboard('tag28175');return false;" class="tag-decoration">release-v5</div><div id="tag4496" onclick="CopyToClipboard('tag4496');return false;" class="tag-decoration">release-v5.0</div><div id="tag7298" onclick="CopyToClipboard('tag7298');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/87cf11e3a66915f67f40d8808a80017823bb519b" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/28981862234" target="_blank">2026-07-08 23:05:37</a></td></tr>
<tr><td><div id="tag8825" onclick="CopyToClipboard('tag8825');return false;" class="tag-decoration">testing</div><div id="tag8992" onclick="CopyToClipboard('tag8992');return false;" class="tag-decoration">testing-7075602</div><div id="tag6821" onclick="CopyToClipboard('tag6821');return false;" class="tag-decoration">testing-5.1.0Beta3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/70756023105bfc83799a60696de3a5257d48661f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29308629189" target="_blank">2026-07-14 05:28:37</a></td></tr>
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
